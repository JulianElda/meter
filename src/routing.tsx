import App from "components/app/app";
import { Navigate, Routes, Route } from "react-router-dom";

import Color from "components/color/color";
import Length from "components/length/length";
import Temperature from "components/temperature/temperature";
import Contrast from "components/contrast/contrast";

export default function AppRouting() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/length" />} />
      <Route path="/" element={<App />}>
        <Route path="color" element={<Color />} />
        <Route path="length" element={<Length />} />
        <Route path="temperature" element={<Temperature />} />
        <Route path="contrast" element={<Contrast />} />
      </Route>
    </Routes>
  );
}
