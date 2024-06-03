import { Outlet } from "react-router-dom";
import { Footer, useDarkMode } from "@julianelda/scratchpad";
import { Navigation } from "src/components/Navigation/Navigation";

export function App() {
  const { isDarkTheme, toggleDarkTheme } = useDarkMode();

  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col sm:pt-4">
      <h1 className="text-center font-heading text-3xl font-semibold">meter</h1>
      <p className="my-1 text-center font-heading text-lg font-semibold md:pb-10">
        tools and converters
      </p>

      <div className="flex">
        <Navigation />
        <div className="mx-auto w-full max-w-xl">
          <div className="w-full flex-col">
            <Outlet />
          </div>
        </div>
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
