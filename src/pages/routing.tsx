import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "src/pages/app/app";
//import Color from "src/pages/color/color";
import Contrast from "src/pages/contrast/contrast";
import Length from "src/pages/length/length";
import Password from "src/pages/password/password";
import Temperature from "src/pages/temperature/temperature";
import { lazy, Suspense } from "react";
import CurrencyResolver from "./currency/currency-resolver";

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
          path="contrast"
          element={<Contrast />}
        />
        <Route
          path="password"
          element={<Password />}
        />
        <Route
          path="currency"
          element={<CurrencyResolver />}
        />
      </Route>
    </>
  ),
  { basename: "/meter/" }
);
/*
{
  return (
    <Routes>
      
    </Routes>
  );
}
*/
