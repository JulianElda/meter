import React, { lazy, useState } from "react";

const Color = lazy(() => import("components/color/color"));
const Length = lazy(() => import("components/length/length"));

export enum Categories {
  LENGTH = "Length",
  COLOR = "Color",
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
    }
  };

  return (
    <div className="min-h-full flex flex-col justify-center pt-12 sm:pt-6 pb-4 sm:pb-2 lg:px-8">
      <div className="flex-1 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="flex mb-3">
            <div className="flex-1">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value as Categories)
                  }
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  <option value={Categories.COLOR}>{Categories.COLOR}</option>
                  <option value={Categories.LENGTH}>{Categories.LENGTH}</option>
                </select>
              </div>
            </div>
          </div>
          <React.Suspense fallback={<>...</>}>
            {getContentBody()}
          </React.Suspense>
        </div>
        <div className="mt-2 grid justify-items-end">
          <a href="https://github.com/JulianElda/meter">Julius Polar@GitHub</a>
        </div>
      </div>
    </div>
  );
}
