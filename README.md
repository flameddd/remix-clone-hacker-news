# Remix clone Hacker News

Routing:
- ./index
- ./news
- ./newest
- ./show
- ./ask
- ./job
- ./stories/34528025
- ./user?id=CHB0403085482
- ./item?id=34528234
- ./newcomments

```
const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
};

https://github.com/cheeaun/node-hnapi
// https://api.hackerwebapp.com/news?page=1
```

## Todo
- SEO, 基本的 meta image titile
- readme 好好寫
- 寫每個技術的心得  
- [Remix Docs](https://remix.run/docs)
- npx wrangler dev
- header cache 感覺可以加一下
- http://127.0.0.1:8787/item/34591625   測試版面的文章

## Development

You will be running two processes during development:

- The Miniflare server (miniflare is a local environment for Cloudflare Workers)
- The Remix development server

Both are started with one command:

```sh
npm run dev
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

If you want to check the production build, you can stop the dev server and run following commands:

```sh
npm run build
npm start
```

Then refresh the same URL in your browser (no live reload for production builds).

## Deployment

If you don't already have an account, then [create a cloudflare account here](https://dash.cloudflare.com/sign-up) and after verifying your email address with Cloudflare, go to your dashboard and set up your free custom Cloudflare Workers subdomain.

Once that's done, you should be able to deploy your app:

```sh
npm run deploy
```
