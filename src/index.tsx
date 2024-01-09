import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import AppRouting from "./pages/routing";
import "@julianelda/scratchpad/styles.css";
import "./tailwind.css";

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
