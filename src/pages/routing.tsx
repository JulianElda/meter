import App from "pages/app/app";
import { Navigate, Routes, Route } from "react-router-dom";

import Color from "pages/color/color";
import Length from "pages/length/length";
import Temperature from "pages/temperature/temperature";
import Contrast from "pages/contrast/contrast";

export default function AppRouting() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/color" />} />
      <Route path="/" element={<App />}>
        <Route path="color" element={<Color />} />
        <Route path="length" element={<Length />} />
        <Route path="temperature" element={<Temperature />} />
        <Route path="contrast" element={<Contrast />} />
      </Route>
    </Routes>
  );
}
