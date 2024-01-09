import { Outlet } from "react-router-dom";
import { Footer } from "@julianelda/scratchpad";

export default function App() {
  return (
    <div className="mx-auto max-w-4xl md:pb-10">
      <div className="mx-auto max-w-md">
        <Outlet />
      </div>
      <Footer
        label="Julius Polar@GitHub"
        link="https://github.com/JulianElda/meter"
      />
    </div>
  );
}
