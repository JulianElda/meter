import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "src/pages/app/app";
//import Color from "src/pages/color/color";
import { Suspense, lazy } from "react";
import Base from "src/pages/base/base";
import Currency from "src/pages/currency/currency";
import Length from "src/pages/length/length";
import Password from "src/pages/password/password";
import Temperature from "src/pages/temperature/temperature";

const Color = lazy(() => import("src/pages/color/color"));

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path=""
        element={<Navigate to="/color" />}
      />
      <Route
        path="/"
        element={<App />}>
        <Route
          path="color"
          element={
            <Suspense fallback={<>...</>}>
              <Color />
            </Suspense>
          }
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
          path="password"
          element={<Password />}
        />
        <Route
          path="currency"
          element={<Currency />}
        />
        <Route
          path="base"
          element={<Base />}
        />
      </Route>
    </>
  ),
  { basename: "/meter/" }
);
