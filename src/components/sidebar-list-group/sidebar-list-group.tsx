import { useState } from "react";

import SidebarListItem, {
  SidebarListItemProps,
} from "components/sidebar-list-item/sidebar-list-item";

import styles from "./sidebar-list-group.module.css";

export type SidebarListGroupProps = {
  id: string;
  label: string;
  items: SidebarListItemProps[];
};

export default function SidebarListGroup(props: SidebarListGroupProps) {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpened(!opened)}
        className={styles.button}
        aria-controls={props.id}
        data-collapse-toggle={props.id}>
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          # {props.label}
        </span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <ul
        id={props.id}
        className={"py-2 space-y-2 " + (opened ? "" : "hidden")}>
        {props.items.map((item) => (
          <SidebarListItem {...item} />
        ))}
      </ul>
    </li>
  );
}
