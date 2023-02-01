
import { Outlet } from "@remix-run/react";

import Header from '~/components/Header'
import * as styles from '~/components/index.css'
import '~/components/theme.css'

export default function Container() {
  return (
    <div className={styles.root}>
      <Header />
      <table
        border={0}
        cellPadding="0"
        cellSpacing="0"
        className={styles.table}
      >
        <tbody>
          <Outlet />
        </tbody>
      </table>
    </div>
  );
}
