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
        company: 'Google',
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
        company: 'Baidu',
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
                name: 'baidu-smartapp',
                pattern: /Baiduspider(-render)?.*Smartapp/,
            },
            {
                name: 'baidu',
                pattern: /Baiduspider(-render)?/,
            },
        ],
        hosts: [
            'baidu.com',
            'baidu.jp',
        ],
    },
    {
        company: 'Bing',
        bots: [
            {
                name: 'bingbot',
                pattern: /Bingbot/,
            },
        ],
        hosts: [
            'search.msn.com',
        ],
    },
    {
        company: 'Alibaba',
        bots: [
            {
                name: 'shenma-mobile',
                pattern: /YisouSpider.*Mobile/,
            },
            {
                name: 'shenma',
                pattern: /YisouSpider/,
            },
        ],
        hosts: [
            'sm.cn',
        ],
    },
    {
        company: '360',
        bots: [
            {
                name: '360-image',
                pattern: /360Spider-Image/,
            },
            {
                name: '360-video',
                pattern: /360Spider-Video/,
            },
            {
                name: '360-mobile',
                pattern: /Mobile.*(Haosou|360)Spider/,
            },
            {
                name: '360',
                pattern: /360Spider/,
            },
        ],
    },
    {
        company: 'Tencent',
        bots: [
            {
                name: 'soso-image',
                pattern: /Sosoimagespider/,
            },
            {
                name: 'soso',
                pattern: /Sosospider/,
            },
        ],
    },
    {
        company: 'Sogou',
        bots: [
            {
                name: 'sogou-video',
                pattern: /Sogou Video Spider/,
            },
            {
                name: 'sogou-pic',
                pattern: /Sogou Pic Spider/,
            },
            {
                name: 'sogou-news',
                pattern: /Sogou News Spider/,
            },
            {
                name: 'sogou-inst',
                pattern: /Sogou inst spider/,
            },
            {
                name: 'sogou-web',
                pattern: /Sogou web spider/,
            },
            {
                name: 'sogou',
                pattern: /Sogou.*spider/i,
            },
        ],
    },
    {
        company: 'Bytedance',
        bots: [
            {
                name: 'toutiao-android',
                pattern: /Android.*Mobile.*Bytespider/,
            },
            {
                name: 'toutiao-ios',
                pattern: /iPhone.*Mobile.*Bytespider/,
            },
            {
                name: 'toutiao',
                pattern: /Bytespider/,
            },
        ],
        hosts: [
            'bytedance.com',
        ],
    },
    {
        company: 'Others',
        bots: [
            {
                name: 'unrecognized-spider',
                pattern: /spider/i,
            },
            {
                name: 'unrecognized-bot',
                pattern: /bot/i,
            },
        ],
    },
];

export default serializeRules(rules);
