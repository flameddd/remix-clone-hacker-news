import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";

import * as styles from "~/components/ListNewsItem.css";
import * as userStyles from "~/components/user.css";

type user = {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: Array<number>;
};

export const loader = async ({ params }: LoaderArgs) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${params.userId}.json`
  );

  if (res.status === 404) {
    return new Response("Item not found.", { status: 404 });
  }

  return json(await res.json());
};

export default function User() {
  const { userId } = useParams();
  const data = useLoaderData<user | null>();

  let dateStr = "";
  let dateLinkStr = "";
  if (data?.created) {
    const createdDate = new Date(data.created * 1000);
    dateStr = createdDate.toDateString().split(" ").slice(1).join(" ");
    dateStr = `${createdDate.getFullYear()}-${`${
      createdDate.getMonth() + 1
    }`.padStart(2, "0")}-${`${createdDate.getDate()}`.padStart(2, "0")}`;
  }

  return (
    <>
      <tr className={styles.separator} />
      {!data ? (
        <td>{`Can not find User: ${userId || ""}`}</td>
      ) : (
        <>
          <tr>
            <td valign="top">user:</td>
            <td>
              <a
                target="_blank"
                href={`https://news.ycombinator.com/user?id=${data.id}`}
                className={userStyles.link1}
              >
                {data.id}
              </a>
            </td>
          </tr>
          <tr>
            <td valign="top">created:</td>
            <td>
              <a
                target="_blank"
                href={`https://news.ycombinator.com/front?day=${dateLinkStr}&birth=${data.id}`}
                className={userStyles.link1}
              >
                {dateStr}
              </a>
            </td>
          </tr>
          <tr>
            <td valign="top">karma:</td>
            <td>884</td>
          </tr>
          <tr>
            <td valign="top">about:</td>
            <td style={{ overflow: "hidden" }}></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a
                target="_blank"
                href={`https://news.ycombinator.com/submitted?id=${data.id}`}
                className={userStyles.link2}
              >
                submissions
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a
                target="_blank"
                href={`https://news.ycombinator.com/threads?id=${data.id}`}
                className={userStyles.link2}
              >
                comments
              </a>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <a
                target="_blank"
                href={`https://news.ycombinator.com/favorites?id=${data.id}`}
                className={userStyles.link2}
              >
                favorites
              </a>
            </td>
          </tr>
        </>
      )}
      <tr className={styles.separator} />
    </>
  );
}
