import RULES from './rules';
import { isValidIp, match } from './util';

interface BotItem {
    name: string;
    company: string;
    mobile: boolean;
}

const MOBILE_REGEX = /mobile/i;

function parse(ua: string): BotItem | false;
function parse(ua: string, ip: string): Promise<(BotItem & { valid: boolean }) | false>
function parse(ua: string, ip?: string): BotItem | false | Promise<(BotItem & { valid: boolean }) | false> {
    if (!ua) {
        return false;
    }

    const res = match(ua, RULES);

    if (!res) {
        return false;
    }

    const data: BotItem = {
        name: res.name,
        company: res.company,
        mobile: !!ua.match(MOBILE_REGEX),
    };

    if (!ip || !res.hosts?.length) {
        return data;
    }

    return isValidIp(res.hosts, ip).then((valid) => {
        return {
            ...data,
            valid,
        };
    });
}

function is(name: string, ua: string): BotItem | false;
function is(name: string, ua: string, ip: string): Promise<(BotItem & { valid: boolean }) | false>
function is(name: string, ua: string, ip?: string): BotItem | false | Promise<(BotItem & { valid: boolean }) | false> {
    if (!name || !ua) {
        return false;
    }

    const rules = RULES.filter(item => item.company === name);

    if (!rules.length) {
        return false;
    }

    const res = match(ua, RULES);

    if (!res) {
        return false;
    }

    const data: BotItem = {
        name: res.name,
        company: res.company,
        mobile: !!ua.match(MOBILE_REGEX),
    };

    if (!ip || !res.hosts?.length) {
        return data;
    }

    return isValidIp(res.hosts, ip).then((valid) => {
        return {
            ...data,
            valid,
        };
    });
}

export { parse, is, RULES };
