import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link, useLocation } from "@remix-run/react";
import { useState } from "react";

import * as styles from "~/components/ListNewsItem.css";
import * as itemStyles from "~/components/item.css";
import "~/components/item.css";

function moveToComment(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
}

type comment = {
  id: number;
  level: number;
  time: number;
  time_ago: string;
  user: string;
  content: string;
  comments: Array<comment>;
  parent?: number;
};

type itemType = {
  id: number;
  content: string;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
  comments_count: number;
  comments: Array<comment>;
  domain: string;
  parent?: number;
};

function getNumOfComments(comments: Array<comment>): number {
  return comments.reduce((acc, comment) => {
    return acc + 1 + getNumOfComments(comment.comments);
  }, 0);
}

export const loader = async ({ params }: LoaderArgs) => {
  const res = await fetch(
    `https://node-hnapi.herokuapp.com/item/${params.itemId}`
  );

  if (res.status === 404) {
    return new Response("Item not found.", { status: 404 });
  }

  return json(await res.json());
};

function Comment(
  props: comment & { prevId: string; nextId: string; parentId: string }
): React.ReactElement {
  const [commentOpen, setCommentOpen] = useState<boolean>(true);
  const numOfComments = getNumOfComments(props.comments);
  const indentSpace =
    props.level < 3 ? props.level : 2 + (props.level - 2) * 0.1; // indent less when too deep level

  return (
    <>
      <tr className={styles.separator} />
      <tr id={`${props.id}`}>
        <td
          align="right"
          valign="top"
          className={itemStyles.tdIndent}
          style={{ "--trIndentSpace": `${indentSpace}` }}
        />
        <td valign="top" className={styles.vote} data-upvote={true}>
          <a
            target="_blank"
            href={`https://news.ycombinator.com/vote?id=${props.id}&how=up&goto=item?id=${props.id}`}
            className={styles.upVote}
          >
            {"▲"}
          </a>
        </td>
        <td valign="top">
          <span>
            <Link to={`/user/${props.user}`} className={styles.commonlink}>
              {props.user}
            </Link>
            <span title={new Date(props.time * 1000).toLocaleString()}>
              {" "}
              <Link to={`/item/${props.id}`} className={styles.commonlink}>
                {`${props.time_ago}`}
              </Link>
            </span>
            {!!props.parentId && (
              <>
                {" | "}
                <span
                  className={itemStyles.moveCommentBtn}
                  onClick={() => moveToComment(props.parentId)}
                >
                  parent
                </span>
              </>
            )}
            {!!props.prevId && (
              <>
                {" | "}
                <span
                  className={itemStyles.moveCommentBtn}
                  onClick={() => moveToComment(props.prevId)}
                >
                  prev
                </span>
              </>
            )}
            {!!props.nextId && (
              <>
                {" | "}
                <span
                  className={itemStyles.moveCommentBtn}
                  onClick={() => moveToComment(props.nextId)}
                >
                  next
                </span>
              </>
            )}{" "}
            <span
              className={itemStyles.moveCommentBtn}
              onClick={() => setCommentOpen((prev) => !prev)}
            >
              {commentOpen ? "[-]" : `[${numOfComments + 1} more]`}
            </span>
          </span>
        </td>
      </tr>
      <tr className={commentOpen ? "" : itemStyles.hideComment}>
        <td colSpan={2}></td>
        <td>
          <span
            className={`${itemStyles.comment} ${itemStyles.contentWrap}`}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </td>
      </tr>
      {!!props.comments.length && (
        <tr className={commentOpen ? "" : itemStyles.hideComment}>
          <td colSpan={2}></td>
          <td>
            <table border={0} cellPadding="0" cellSpacing="0">
              <tbody>
                {props.comments.map((comment, index) => {
                  const prevId =
                    index === 0 ? "" : props.comments[index - 1].id;
                  const nextId =
                    props.comments.length === index + 1
                      ? ""
                      : props.comments[index + 1].id;
                  return (
                    <Comment
                      {...comment}
                      key={comment.id}
                      prevId={`${prevId}`}
                      nextId={`${nextId}`}
                      parentId={`${props.id}`}
                    />
                  );
                })}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
}

export default function Item() {
  const data = useLoaderData<itemType>();
  const isInternalLink = !!data.url?.includes("item?id=");

  return (
    <>
      <tr id={`${data.id}`}>
        <td align="right" valign="top" width="8px" />
        <td valign="top" className={styles.vote} data-upvote={true}>
          <a
            target="_blank"
            href={`https://news.ycombinator.com/vote?id=${data.id}&how=up&goto=item?id=${data.id}`}
            className={styles.upVote}
          >
            {" "}
            {"▲"}{" "}
          </a>
        </td>
        <td valign="top">
          {data.type === "comment" ? (
            <span>
              {data.user && (
                <Link to={`/user/${data.user}`} className={styles.commonlink}>
                  {data.user}
                </Link>
              )}
              <span title={new Date(data.time * 1000).toLocaleString()}>
                {" "}
                <Link to={`/item/${data.id}`} className={styles.commonlink}>
                  {`${data.time_ago}`}
                </Link>
              </span>
            </span>
          ) : (
            <span>
              {isInternalLink ? (
                <Link to={`/item/${data.id}`} className={styles.title}>
                  {data.title}
                </Link>
              ) : (
                <a href={data.url} target="_blank" className={styles.title}>
                  {data.title}
                </a>
              )}
              {!!data?.domain && (
                <span className={styles.domain}>
                  (
                  <a
                    href={`https://news.ycombinator.com/from?site=${data.domain}`}
                    target="_blank"
                    className={styles.commonlink}
                  >
                    <span>{data.domain}</span>
                  </a>
                  )
                </span>
              )}
            </span>
          )}
        </td>
      </tr>
      {data.type !== "comment" && (
        <tr>
          <td colSpan={2}></td>
          <td>
            <span>
              {data.points > 0 && <span>{`${data.points} points`}</span>}
              {data.user && (
                <>
                  {" by "}
                  <Link to={`/user/${data.user}`} className={styles.commonlink}>
                    {data.user}
                  </Link>
                </>
              )}
              <span title={new Date(data.time * 1000).toLocaleString()}>
                {" "}
                <Link to={`/item/${data.id}`} className={styles.commonlink}>
                  {`${data.time_ago}`}
                </Link>
              </span>
              {data.comments_count > 0 && (
                <>
                  {" | "}
                  <Link
                    to={`/item/${data.id}`}
                    className={styles.commonlink}
                    dangerouslySetInnerHTML={{
                      __html: `${data.comments_count}&nbsp;comments`,
                    }}
                  ></Link>
                </>
              )}
            </span>
          </td>
        </tr>
      )}
      <tr>
        <td colSpan={2}></td>
        <td>
          <span
            className={itemStyles.contentWrap}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </td>
      </tr>
      {data.comments?.length > 0 &&
        data.comments.map((comment, index) => {
          const prevId = index === 0 ? "" : data.comments[index - 1].id;
          const nextId =
            data.comments.length === index + 1
              ? ""
              : data.comments[index + 1].id;
          return (
            <Comment
              {...comment}
              key={comment.id}
              prevId={`${prevId}`}
              nextId={`${nextId}`}
              parentId={`${data.id}`}
            />
          );
        })}
    </>
  );
}
