import { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import { MAX_WIDTH } from "consts";
import Footer from "components/footer/footer";
import Header from "components/header/header";

export enum Categories {
  LENGTH = "Length",
  COLOR = "Color",
  TEMPERATURE = "Temperature",
  CONTRAST = "Contrast",
}

const CategoryRoutes = {
  [Categories.LENGTH]: "/length",
  [Categories.COLOR]: "/color",
  [Categories.TEMPERATURE]: "/temperature",
  [Categories.CONTRAST]: "/contrast",
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [category, setCategory] = useState<Categories>();

  const onChangeCategory = function (category: Categories) {
    setCategory(category);
    return navigate(CategoryRoutes[category]);
  };

  useEffect(() => {
    Object.keys(CategoryRoutes).forEach((key) => {
      if (location.pathname === CategoryRoutes[key])
        setCategory(key as Categories);
    });
  }, [location]);

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
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
