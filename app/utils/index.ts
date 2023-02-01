
import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

type pathnameMap = {
  [key: string]: string;
}

const mapStories: pathnameMap = {
  "/": "news",
  "/new": "newest",
  "/show": "show",
  "/ask": "ask",
  "/jobs": "jobs",
};

// fetch story list
export const storyLoader =  async ({ request }: LoaderArgs) => {

  const url = new URL(request.url);
  const pathname = mapStories[url.pathname]
  const page = url.searchParams.get("page");
  
  const res = await fetch(
    `https://api.hackerwebapp.com/${pathname}?page=${page || 1}`
  )

  return json(await res.json());
}
