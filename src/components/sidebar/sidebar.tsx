import SidebarListGroup, {
  SidebarListGroupProps,
} from "components/sidebar-list-group/sidebar-list-group";

import styles from "./sidebar.module.css";

export default function Sidebar() {
  const converterGroup: SidebarListGroupProps = {
    id: "converter-group",
    label: "Converters",
    items: [
      { label: "Length", link: "/length" },
      { label: "Temperature", link: "/temperature" },
      { label: "Color", link: "/color" },
    ],
  };

  const passwordGroup: SidebarListGroupProps = {
    id: "password-group",
    label: "Password",
    items: [{ label: "Password", link: "/password" }],
  };

  const utilitiesGroup: SidebarListGroupProps = {
    id: "utilities-group",
    label: "Utilities",
    items: [{ label: "Contrast", link: "/contrast" }],
  };

  return (
    <aside
      id="sidebar"
      className={styles.sidebar}
      aria-label="Sidenav">
      <div className={styles.container}>
        <ul className="space-y-2">
          <span className={styles.title}>meter</span>

          <hr className="border-t border-gray-200 dark:border-gray-700" />

          <SidebarListGroup {...converterGroup} />
          <SidebarListGroup {...passwordGroup} />
          <SidebarListGroup {...utilitiesGroup} />
        </ul>
        <div className="text-white bottom-4 absolute">
          <a
            href="https://github.com/JulianElda/meter"
            target="_blank"
            rel="noreferrer"
            className="font-mono hover:underline decoration-dotted">
            Julius Polar@GitHub
          </a>
        </div>
      </div>
    </aside>
  );
}
