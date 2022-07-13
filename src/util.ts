import { RuleItem } from './rules';

const mergeRegexp = (rules: RegExp[]): RegExp => {
    const sources = rules.map(item => item.source);

    const flags = Array.from(new Set(Array.prototype.concat(
        [],
        ...rules.map(item => item.flags ? item.flags.split('') : []),
    )));

    return new RegExp(sources.join('|'), flags.join('') || 'i');
};

export const serializeRules = (rules: RuleItem[]): Array<RuleItem & { pattern: RegExp }> => {
    return rules.map((item) => {
        const bots = item.bots.map(item => {
            return {
                ...item,
                pattern: new RegExp(item.pattern, item.pattern instanceof RegExp && item.pattern.flags || 'i'),
            };
        });

        return {
            ...item,
            bots,
            pattern: mergeRegexp(bots.map((item) => item.pattern)),
        };
    });
};

export const match = (ua: string, rules: Array<RuleItem & { pattern: RegExp }>) => {
    for (const group of rules) {
        console.log(`pattern: ${group.pattern} ${ua.match(group.pattern)}`);
        if (!ua.match(group.pattern)) {
            continue;
        }

        for (const bot of group.bots) {
            if (!ua.match(bot.pattern)) {
                continue;
            }

            return {
                company: group.company,
                name: bot.name,
                hosts: group.hosts,
            };
        }

        return false;
    }

    return false;
};

export const isValidIp = async (hosts: string[], ip: string) => {
    const { reverse } = require('dns').promises;

    if (typeof reverse !== 'function') {
        return false;
    }

    try {
        const resolved: string[] = await reverse(ip);

        for (const item of resolved) {
            for (const host of hosts) {
                if (item.endsWith(host)) {
                    return true;
                }
            }
        }

        return false;
    } catch (e) {
        return false;
    }
};
