import { useLocation, Link } from "@remix-run/react";
import * as styles from "./ListNewsItem.css";

enum LinkTypes {
  link = "link",
  job = "job",
  comment = "comment",
}

export type News = {
  order: number;
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: LinkTypes;
  url: string;
  domain: string;
};

export default function ListNewsItem(props: News): JSX.Element {
  const location = useLocation();
  const showOrder = location.pathname !== "/jobs";
  const displayUpvote = props.type !== LinkTypes.job && showOrder;
  const isInternalLink = props.url.includes("item?id=");

  return (
    <>
      <tr>
        <td align="right" valign="top">
          {showOrder && <span>{`${props.order}.`}</span>}
        </td>
        <td valign="top" className={styles.vote} data-upvote={displayUpvote}>
          {displayUpvote && (
            <a
              target="_blank"
              href={`https://news.ycombinator.com/vote?id=${props.id}&how=up&goto=new`}
              className={styles.upVote}
            />
          )}
        </td>
        <td>
          <span>
            {isInternalLink ? (
              <Link to={`/item/${props.id}`} className={styles.title}>
                {props.title}
              </Link>
            ) : (
              <a href={props.url} target="_blank" className={styles.title}>
                {props.title}
              </a>
            )}
            {!!props.domain && (
              <span className={styles.domain}>
                {" ("}
                <a
                  href={`https://news.ycombinator.com/from?site=${props.domain}`}
                  target="_blank"
                  className={styles.commonlink}
                >
                  <span>{props.domain}</span>
                </a>
                {")"}
              </span>
            )}
          </span>
        </td>
      </tr>
      <tr>
        <td colSpan={2}></td>
        <td>
          <span className={styles.subTitle}>
            {props.points > 0 && <span>{`${props.points} points`}</span>}
            {props.user && (
              <>
                {" by "}
                <Link to={`/user/${props.user}`} className={styles.commonlink}>
                  {props.user}
                </Link>
              </>
            )}
            <span title={new Date(props.time * 1000).toLocaleString()}>
              {" "}
              <Link to={`/item/${props.id}`} className={styles.commonlink}>
                {`${props.time_ago}`}
              </Link>
            </span>
            {props.comments_count > 0 && (
              <>
                {" | "}
                <Link
                  to={`/item/${props.id}`}
                  className={`${styles.commonlink} ${styles.title}`}
                  dangerouslySetInnerHTML={{
                    __html: `${props.comments_count}&nbsp;comments`,
                  }}
                ></Link>
              </>
            )}
          </span>
        </td>
      </tr>
      <tr className={styles.separator} />
    </>
  );
}
