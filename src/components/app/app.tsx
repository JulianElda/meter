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
    <div className="min-h-full flex flex-col lg:pt-12 pb-4 sm:pb-2 lg:px-8 sm:px-2">
      <div className="mx-auto max-w-md">
        <h1 className="font-mono text-2xl text-center mt-1 mb-4">meter</h1>

        <div className="md:bg-white md:shadow rounded-lg py-8 px-4 sm:px-10">
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
        <div className="mt-2 mx-2 grid justify-items-end">
          <a
            href="https://github.com/JulianElda/meter"
            target="_blank"
            rel="noreferrer"
            className="font-mono hover:underline decoration-dotted">
            Julius Polar@GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
