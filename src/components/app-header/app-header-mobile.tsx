import { GitHubButton, ThemeToggle, useDarkMode } from "@julianelda/scratchpad";
import { MenuIcon } from "lucide-react";

import { sidebarActions } from "@/src/store/sidebar/sidebar.store";

export function AppHeaderMobile() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className={`
        z-20 flex h-16 items-center gap-2 border-b border-ink-gray
        bg-app-background-light p-2
        sm:hidden
        dark:bg-app-background-dark
      `}>
      <button
        className={`
          flex h-full w-auto cursor-pointer items-center justify-center
          rounded-lg border border-ink-gray p-2
        `}
        onClick={() => {
          sidebarActions.toggleSidebar();
        }}>
        <MenuIcon />
      </button>
      <div className="flex-1 font-heading text-3xl font-semibold select-none">
        meter
      </div>
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <GitHubButton
        isDarkMode={isDarkMode}
        link="https://github.com/JulianElda/meter"
      />
    </div>
  );
}
