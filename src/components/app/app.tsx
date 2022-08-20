import React, { lazy, useState } from "react";

import "./app.scss";

const Color = lazy(() => import("components/color/color"));
const Length = lazy(() => import("components/length/length"));
const Temperature = lazy(() => import("components/temperature/temperature"));

export enum Categories {
  LENGTH = "Length",
  COLOR = "Color",
  TEMPERATURE = "Temperature",
}

const DEFAULT_CATEGORY = Categories.COLOR;

export default function App() {
  const [category, setCategory] = useState<Categories>(DEFAULT_CATEGORY);

  const getContentBody = function (): React.ReactNode {
    switch (category) {
      case Categories.LENGTH:
        return <Length />;
      case Categories.COLOR:
        return <Color />;
      case Categories.TEMPERATURE:
        return <Temperature />;
    }
  };

  return (
    <div className="app-container">
      <div className="mx-auto max-w-md">
        <h1 className="app-heading">meter</h1>

        <div className="app-card">
          <div className="flex mb-3">
            <div className="flex-1">
              <div className="mt-1">
                <select
                  id="category"
                  name="category"
                  data-testid="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value as Categories)
                  }
                  className="input-field-text">
                  <option value={Categories.COLOR}>{Categories.COLOR}</option>
                  <option value={Categories.LENGTH}>{Categories.LENGTH}</option>
                  <option value={Categories.TEMPERATURE}>
                    {Categories.TEMPERATURE}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <React.Suspense fallback={<>...</>}>
            {getContentBody()}
          </React.Suspense>
        </div>
        <div className="app-footer">
          <a
            href="https://github.com/JulianElda/meter"
            target="_blank"
            rel="noreferrer"
            className="app-url">
            Julius Polar@GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
