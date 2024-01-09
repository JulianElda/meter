import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "src/pages/app/app";
import Color from "src/pages/color/color";
import Contrast from "src/pages/contrast/contrast";
import Length from "src/pages/length/length";
import Password from "src/pages/password/password";
import Temperature from "src/pages/temperature/temperature";

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
