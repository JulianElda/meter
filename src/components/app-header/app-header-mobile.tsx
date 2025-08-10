import { GitHubButton, ThemeToggle, useDarkMode } from "@julianelda/scratchpad";
import { MenuIcon } from "lucide-react";

export function AppHeaderMobile() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="sm:hidden p-2 border-b border-ink-gray flex items-center gap-2">
      <div className="rounded-lg border-ink-gray border cursor-pointer h-full w-auto p-2">
        <MenuIcon />
      </div>
      <div className="font-heading text-3xl font-semibold flex-1">meter</div>
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
