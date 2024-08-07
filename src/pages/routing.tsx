import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Base } from "./Base";
import { Currency } from "./Currency";
import { Length } from "./Length";
import { Password } from "./Password";
import { Speed } from "./Speed";
import { Temperature } from "./Temperature";

const Color = lazy(() =>
  import("./Color").then((module) => ({ default: module.Color }))
);

export const routes = createBrowserRouter(
  [
    {
      path: "",
      element: <Navigate to="/currency" />,
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "color",
          element: (
            <Suspense fallback={<>...</>}>
              <Color />
            </Suspense>
          ),
        },
        {
          path: "length",
          element: <Length />,
        },
        {
          path: "speed",
          element: <Speed />,
        },
        {
          path: "temperature",
          element: <Temperature />,
        },
        {
          path: "password",
          element: <Password />,
        },
        {
          path: "currency",
          element: <Currency />,
        },
        {
          path: "base",
          element: <Base />,
        },
      ],
    },
  ],
  {
    basename: "/meter/",
  }
);
