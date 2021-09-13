# which-spider

detect which spider is from user-agent

# Usage

```bash
npm install which-bot
# OR
yarn add which-bot
```

```typescript
import { parse } from 'which-bot';

parse(
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36'
) // => { name: 'googlebot', compant: 'google', mobile: false }

parse(
    'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
) // => { name: 'googlebot', compant: 'google', mobile: true }

await parse(
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36',
    '66.249.66.1'
) // => { name: 'googlebot', compant: 'google', mobile: false, valid: true }

await parse(
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36',
    '1.1.1.1'
) // => { name: 'googlebot', compant: 'google', mobile: false, valid: false }
```

# API Reference
## parse(ua: string)
```typescript
interface BotItem {
    name: string;
    company: string;
    mobile: boolean;
}
```

## async parse(ua: string, ip: string)
```typescript
{
    name: string;
    company: string;
    mobile: boolean;
    valid: boolean;
}
```

## is(company: string, us: string)
```typescript
interface BotItem {
    name: string;
    company: string;
    mobile: boolean;
}
```

## async is(name: string, ua: string, ip: string)
```typescript
{
    name: string;
    company: string;
    mobile: boolean;
    valid: boolean;
}
```
