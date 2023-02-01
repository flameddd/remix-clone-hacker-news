import HN from "./index";
import { storyLoader } from "~/utils";

import { storyHint, commonlink2 } from "~/components/index.css";

export const loader = storyLoader;

function StoryHint() {
  return (
    <tr>
      <td colSpan={2}></td>
      <td>
        <div className={storyHint}>
          {"Please read the "}
          <a
            target="_blank"
            href="https://news.ycombinator.com/showhn.html"
            className={commonlink2}
          >
            <u>rules</u>
          </a>
          {". You can also browse the "}
          <a
            target="_blank"
            href="https://news.ycombinator.com/shownew"
            className={commonlink2}
          >
            <u>newest</u>
          </a>
          {" Show HNs."}
        </div>
      </td>
    </tr>
  );
}

export default function Show() {
  return <HN StoryHint={StoryHint} />;
}
