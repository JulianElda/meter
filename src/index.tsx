import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "assets/styles/index.css";
import "assets/styles/tailwind.css";

import AppRouting from "pages/routing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path="/*"
          element={<AppRouting />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
