import App from "components/app/app";
import { lazy } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Color from "components/color/color";
import Length from "components/length/length";
import Temperature from "components/temperature/temperature";
import Contrast from "components/contrast/contrast";

/*
const Color = lazy(() => import("components/color/color"));
const Length = lazy(() => import("components/length/length"));
const Temperature = lazy(() => import("components/temperature/temperature"));
const Contrast = lazy(() => import("components/contrast/contrast"));
*/

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
