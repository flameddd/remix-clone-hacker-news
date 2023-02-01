
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { storyLoader } from '~/utils'

import Header from '~/components/Header'
import ListNewsItem, { News } from '~/components/ListNewsItem'
import More from '~/components/More'
import * as styles from '~/components/index.css'
import '~/components/theme.css'

export const loader = storyLoader;

type IndexProps = { StoryHint: React.FC | null }

export default function Index({ StoryHint }: IndexProps) {
  const data = useLoaderData<Array<News>>()
  const [searchParams] = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;

  return (
    <div className={styles.root}>
      <Header />
      <table border={0} cellPadding="0" cellSpacing="0" className={styles.table}>
        <tbody>
          {StoryHint && <StoryHint />}
          {data.length > 0 && data.map((item, index: number) => (
            <ListNewsItem
              key={item.id}
              {...item}
              order={((page - 1) * 30) + index + 1}
            />
          ))}
          <More />
        </tbody>
      </table>
    </div>
  );
}
