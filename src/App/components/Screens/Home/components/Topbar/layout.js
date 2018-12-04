import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

function Layout() {
  return (
    <nav className={styles.navbar}>
      <div>
        <button className={styles.list}>
          <Link to="/home" className={styles.link}>
            Home
          </Link>
        </button>
        <button className={styles.list}>
          <Link to="/shopping" className={styles.link}>
            Shopping
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Layout;
