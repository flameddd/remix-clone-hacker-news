import { Link, NavLink } from "@remix-run/react";
import * as styles from './Header.css'
import './Header.css'

const navLinkStyle = ({ isActive }: { isActive: Boolean}): string => (isActive
  ? `${styles.link} ${styles.activeStoryLink}`
  : `${styles.link}`)

export default function Header() {
  return (
    <div className={styles.header}>
      <a
        href="https://remix.run/"
        target="_blank"
        className={styles.logoA}
      >
        <img
          // src="/favicon-dark.1.png"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEgSURBVHgB7ZbNEYIwEIUfDncpgQ6kBOzATsQKpAOhA+3ADsAKtAMpgQ7iZggXyA8CiR7yzbxhgAResptNAI/nxwS6l4yxhC4RptGSmiAIWqwFGajY9zxJR1KMpcw00PMWM6hlA3vEpMpkwqYBDs+fC2zDR0nKNeGYmsiLjahMKMOwdghqxfPIlQEV69UGFTzOogaMlqOuX2j46BndcjKRiHayqc4xF7asEHFy0z9C2OFOKmlfqE0NbRk4kFqaAb45NbqGpt0wo8sOenjc+xwYUpOBPVxAZgtFHqRwgViGMjJdv9UKkTiIyApOrOtnqgMF5DnQkE6S0w+/H9aCLeYaED9PFe8epCsW4movUGKagRu6kcp4SZ6VGIdA1s7j+R8+qS98B8RSLpgAAAAASUVORK5CYII="
          width="18"
          height="18"
          alt="Remix.run Logo"
          title="-> Go to Remix.run"
          className={styles.logo}
        />
      </a>
      <div className={styles.navs}>
        <Link to="/" className={styles.linkIndex}>Remix.run Hacker News</Link>
        <div className={styles.links}>
          <NavLink to="/new" className={navLinkStyle}>new</NavLink>{" | "}
          <NavLink to="/show" className={navLinkStyle}>show</NavLink>{" | "}
          <NavLink to="/ask" className={navLinkStyle}>ask</NavLink>{" | "}
          <NavLink to="/jobs" className={navLinkStyle}>jobs</NavLink>
        </div>
      </div>
    </div>      
  );
}
