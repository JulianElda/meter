import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import { MAX_WIDTH } from "consts";
import Footer from "components/footer/footer";
import Header from "components/header/header";

export enum Categories {
  LENGTH = "Length",
  COLOR = "Color",
  TEMPERATURE = "Temperature",
  CONTRAST = "Contrast",
}

const DEFAULT_CATEGORY: Categories = Categories.LENGTH;

export default function App() {
  const navigate = useNavigate();

  const [category, setCategory] = useState<Categories>(DEFAULT_CATEGORY);

  const onChangeCategory = function (category: Categories) {
    setCategory(category);
    switch (category) {
      case Categories.LENGTH:
        return navigate("length");
      case Categories.COLOR:
        return navigate("/color");
      case Categories.TEMPERATURE:
        return navigate("/temperature");
      case Categories.CONTRAST:
        return navigate("/contrast");
    }
  };

  return (
    <div
      className="min-h-full
      flex flex-col
      lg:pt-12 pb-4 sm:pb-2 lg:px-8 sm:px-2">
      <div className={"mx-auto " + MAX_WIDTH}>
        <Header />

        <div className="app-card">
          <div className="w-full mb-3">
            <select
              id="category"
              name="category-input"
              data-testid="category-input"
              aria-label="category"
              value={category}
              onChange={(event) =>
                onChangeCategory(event.target.value as Categories)
              }
              className="input-field-text">
              <option value={Categories.COLOR}>{Categories.COLOR}</option>
              <option value={Categories.LENGTH}>{Categories.LENGTH}</option>
              <option value={Categories.TEMPERATURE}>
                {Categories.TEMPERATURE}
              </option>
              <option value={Categories.CONTRAST}>{Categories.CONTRAST}</option>
            </select>
          </div>
          <React.Suspense fallback={<></>}>
            <Outlet />
          </React.Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
}
