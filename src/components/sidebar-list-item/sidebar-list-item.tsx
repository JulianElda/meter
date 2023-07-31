import { NavLink } from "react-router-dom";

import styles from "./sidebar-list-item.module.css";

export type SidebarListItemProps = {
  link: string;
  label: string;
};

export default function SidebarListItem(props: SidebarListItemProps) {
  return (
    <li>
      <NavLink
        to={props.link}
        className={styles.sidebaritem}>
        {props.label}
      </NavLink>
    </li>
  );
}
