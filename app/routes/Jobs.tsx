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
          {"These are jobs at YC startups. See more at "}
          <a
            target="_blank"
            href="https://www.ycombinator.com/jobs"
            className={commonlink2}
          >
            <u>ycombinator.com/jobs</u>
          </a>
          {"."}
        </div>
      </td>
    </tr>
  );
}

export default function Jobs() {
  return <HN StoryHint={StoryHint} />;
}
