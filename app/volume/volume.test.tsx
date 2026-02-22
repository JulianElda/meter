import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { VolumeUnits } from "@/src/constants/volume";

import { Volume } from "./volume";

test("render elements", async () => {
  const { getByTestId } = await render(<Volume />);

  await expect.element(getByTestId("from-input")).toBeInTheDocument();
  await expect.element(getByTestId("from-select")).toBeInTheDocument();
  await expect.element(getByTestId("result-input")).toBeInTheDocument();
  await expect.element(getByTestId("result-select")).toBeInTheDocument();
});

test("change input amount", async () => {
  const { getByTestId } = await render(<Volume />);

  await getByTestId("from-input").clear();
  await getByTestId("from-input").fill("200");

  await expect.element(getByTestId("from-input")).toHaveValue(200);
  await expect.element(getByTestId("result-input")).toHaveValue(6762.805);
});

test("change input units", async () => {
  const { getByTestId } = await render(<Volume />);

  await getByTestId("from-select").selectOptions(VolumeUnits.imperial_gallon);

  await expect
    .element(getByTestId("from-select"))
    .toHaveValue(VolumeUnits.imperial_gallon);
  await expect.element(getByTestId("result-input")).toHaveValue(15_372.159);
});

test("change result units", async () => {
  const { getByTestId } = await render(<Volume />);

  await getByTestId("result-select").selectOptions(VolumeUnits.imperial_gallon);

  await expect
    .element(getByTestId("result-select"))
    .toHaveValue(VolumeUnits.imperial_gallon);
  await expect.element(getByTestId("result-input")).toHaveValue(21.997);
});
