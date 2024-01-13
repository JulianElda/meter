import { Outlet } from "react-router-dom";
import { Footer, useDarkMode } from "@julianelda/scratchpad";

export default function App() {
  const { isDarkTheme, toggleDarkTheme } = useDarkMode();

  return (
    <div className="mx-auto max-w-4xl md:pb-10">
      <div className="mx-auto max-w-md">
        <Outlet />
      </div>
      <Footer
        label="Julius Polar@GitHub"
        link="https://github.com/JulianElda/meter"
        darkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
    </div>
  );
}
