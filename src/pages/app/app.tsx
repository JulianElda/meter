import { Outlet } from "react-router-dom";

import Sidebar from "components/sidebar/sidebar";

import styles from "./app.module.css";

export default function App() {
  return (
    <div>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.page}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
