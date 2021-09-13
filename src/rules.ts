import { serializeRules } from './util';

export interface RuleItem {
    company: string;
    bots: {
        name: string;
        pattern: RegExp;
    }[];
    hosts?: string[];
}

const rules: RuleItem[] = [
    {
        company: 'google',
        bots: [
            {
                name: 'googlebot-image',
                pattern: /Googlebot-Image/,
            },
            {
                name: 'googlebot-news',
                pattern: /Googlebot-News/,
            },
            {
                name: 'googlebot-video',
                pattern: /Googlebot-Video/,
            },
            {
                name: 'googlebot',
                pattern: /Googlebot/,
            },
            {
                name: 'apis-google',
                pattern: /APIs-Google/,
            },
            {
                name: 'adsense',
                pattern: /Mediapartners-Google/,
            },
            {
                name: 'adsbot-mobile-web-android',
                pattern: /Android.*AdsBot-Google-Mobile/,
            },
            {
                name: 'adsbot-mobile-web',
                pattern: /AdsBot-Google-Mobile/,
            },
            {
                name: 'adsbot',
                pattern: /AdsBot-Google/,
            },
            {
                name: 'mobile-apps-android',
                pattern: /AdsBot-Google-Mobile-Apps/,
            },
            {
                name: 'feed-fetcher',
                pattern: /FeedFetcher-Google/,
            },
            {
                name: 'read-aloud',
                pattern: /Google-Read-Aloud/,
            },
            {
                name: 'duplex',
                pattern: /DuplexWeb-Google/,
            },
            {
                name: 'favicon',
                pattern: /Google Favicon/,
            },
            {
                name: 'web-light',
                pattern: /googleweblight/,
            },
            {
                name: 'store-bot',
                pattern: /Storebot-Google/,
            },
        ],
        hosts: [
            'google.com',
            'googlebot.com',
        ],
    },
    {
        company: 'baidu',
        bots: [
            {
                name: 'baidu-image',
                pattern: /Baiduspider-image/,
            },
            {
                name: 'baidu-video',
                pattern: /Baiduspider-video/,
            },
            {
                name: 'baidu-news',
                pattern: /Baiduspider-news/,
            },
            {
                name: 'baidu-favo',
                pattern: /Baiduspider-favo/,
            },
            {
                name: 'baidu-cpro',
                pattern: /Baiduspider-cpro/,
            },
            {
                name: 'baidu-ads',
                pattern: /Baiduspider-ads/,
            },
            {
                name: 'baidu',
                pattern: /Baiduspider/,
            },
        ],
        hosts: [
            'baidu.com',
            'baidu.jp',
        ],
    },
    {
        company: 'bing',
        bots: [
            {
                name: 'bingbot',
                pattern: /Bingbot/,
            },
        ],
    },
];


export default serializeRules(rules);
