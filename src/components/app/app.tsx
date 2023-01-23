import React, { lazy, useState } from "react";

import { MAX_WIDTH, FOOTER_LABEL, REPO_URL, TITLE } from "consts";
import Footer from "components/footer/footer";
import Header from "components/header/header";

const Color = lazy(() => import("components/color/color"));
const Length = lazy(() => import("components/length/length"));
const Temperature = lazy(() => import("components/temperature/temperature"));

export enum Categories {
  LENGTH = "Length",
  COLOR = "Color",
  TEMPERATURE = "Temperature",
}

const DEFAULT_CATEGORY: Categories = Categories.LENGTH;

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
    <div
      className="min-h-full
      flex flex-col
      lg:pt-12 pb-4 sm:pb-2 lg:px-8 sm:px-2">
      <div className={"mx-auto " + MAX_WIDTH}>
        <Header title={TITLE} />

        <div className="app-card">
          <div className="w-full mb-3">
            <select
              id="category"
              name="category-input"
              data-testid="category-input"
              aria-label="category"
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
          <React.Suspense fallback={<>...</>}>
            {getContentBody()}
          </React.Suspense>
        </div>
        <Footer label={FOOTER_LABEL} repoUrl={REPO_URL} />
      </div>
    </div>
  );
}
