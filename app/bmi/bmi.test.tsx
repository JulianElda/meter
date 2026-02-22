import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Bmi } from "./bmi";

test("render elements", async () => {
  const { getByTestId } = await render(<Bmi />);

  await expect.element(getByTestId("height-input")).toBeInTheDocument();
  await expect.element(getByTestId("height-select")).toBeInTheDocument();
  await expect.element(getByTestId("weight-input")).toBeInTheDocument();
  await expect.element(getByTestId("weight-select")).toBeInTheDocument();
  await expect.element(getByTestId("bmi-bmi")).toBeInTheDocument();
  await expect.element(getByTestId("bmi-category")).toBeInTheDocument();
});
