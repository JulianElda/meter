import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { LengthUnits } from "@/src/constants/length";

import { Length } from "./length";

test("render elements", async () => {
  const { getByTestId } = await render(<Length />);

  await expect.element(getByTestId("from-input")).toBeInTheDocument();
  await expect.element(getByTestId("from-select")).toBeInTheDocument();
  await expect.element(getByTestId("result-input")).toBeInTheDocument();
  await expect.element(getByTestId("result-select")).toBeInTheDocument();
});

test("change input amount", async () => {
  const { getByTestId } = await render(<Length />);

  await getByTestId("from-input").clear();
  await getByTestId("from-input").fill("200");

  await expect.element(getByTestId("from-input")).toHaveValue(200);
  await expect.element(getByTestId("result-input")).toHaveValue(124.274);
});

test("change input units", async () => {
  const { getByTestId } = await render(<Length />);

  await getByTestId("from-select").selectOptions(LengthUnits.yard);

  await expect
    .element(getByTestId("from-select"))
    .toHaveValue(LengthUnits.yard);
  await expect.element(getByTestId("result-input")).toHaveValue(0.057);
});

test("change result units", async () => {
  const { getByTestId } = await render(<Length />);

  await getByTestId("result-select").selectOptions(LengthUnits.ft);

  await expect
    .element(getByTestId("result-select"))
    .toHaveValue(LengthUnits.ft);
  await expect.element(getByTestId("result-input")).toHaveValue(328_083.99);
});
