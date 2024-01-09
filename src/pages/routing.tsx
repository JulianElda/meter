import App from "src/pages/app/app";
import { Navigate, Routes, Route } from "react-router-dom";

import Color from "src/pages/color/color";
import Length from "src/pages/length/length";
import Temperature from "src/pages/temperature/temperature";
import Contrast from "src/pages/contrast/contrast";
import Password from "src/pages/password/password";

export default function AppRouting() {
  return (
    <Routes>
      <Route
        path=""
        element={<Navigate to="/color" />}
      />
      <Route
        path="/"
        element={<App />}>
        <Route
          path="color"
          element={<Color />}
        />
        <Route
          path="length"
          element={<Length />}
        />
        <Route
          path="temperature"
          element={<Temperature />}
        />
        <Route
          path="contrast"
          element={<Contrast />}
        />
        <Route
          path="password"
          element={<Password />}
        />
      </Route>
    </Routes>
  );
}
