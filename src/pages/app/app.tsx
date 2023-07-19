import { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import Footer from "components/footer/footer";
import Header from "components/header/header";
import Select, { SelectOption } from "components/form/select";

export enum Categories {
  LENGTH = "Length",
  COLOR = "Color",
  TEMPERATURE = "Temperature",
  CONTRAST = "Contrast",
  PASSWORD = "Password",
}

const CategoryRoutes = {
  [Categories.LENGTH]: "/length",
  [Categories.COLOR]: "/color",
  [Categories.TEMPERATURE]: "/temperature",
  [Categories.CONTRAST]: "/contrast",
  [Categories.PASSWORD]: "/password",
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [category, setCategory] = useState<Categories>();

  const getOptions = function (): SelectOption[] {
    let tmp: SelectOption[] = [];
    for (const key in Categories)
      tmp.push({
        display: Categories[key] as string,
        value: Categories[key],
      });
    return tmp;
  };

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
      lg:pt-12 pb-4 sm:pb-2 lg:px-4 sm:px-2">
      <div className="app-container">
        <Header />
        <div className="app-card">
          <div className="w-full mb-3">
            <Select
              id="category-input"
              label="Convert"
              value={category || Categories.COLOR}
              onChange={(value) => onChangeCategory(value as Categories)}
              options={getOptions()}
            />
          </div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
