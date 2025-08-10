import { GitHubButton, ThemeToggle, useDarkMode } from "@julianelda/scratchpad";
import { MenuIcon } from "lucide-react";

export function AppHeaderMobile() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className={`
        flex items-center gap-2 border-b border-ink-gray p-2
        sm:hidden
      `}>
      <div
        className={`
          h-full w-auto cursor-pointer rounded-lg border border-ink-gray p-2
        `}>
        <MenuIcon />
      </div>
      <div className="flex-1 font-heading text-3xl font-semibold">meter</div>
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
