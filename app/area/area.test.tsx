import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { AreaUnits } from "@/src/constants/area";

import { Area } from "./area";

test("render elements", async () => {
  const { getByTestId } = await render(<Area />);

  await expect.element(getByTestId("from-input")).toBeInTheDocument();
  await expect.element(getByTestId("from-select")).toBeInTheDocument();
  await expect.element(getByTestId("result-input")).toBeInTheDocument();
  await expect.element(getByTestId("result-select")).toBeInTheDocument();
});

test("change value and units", async () => {
  const { getByTestId } = await render(<Area />);

  const inputFrom = getByTestId("from-input");
  const selectFrom = getByTestId("from-select");
  const selectResult = getByTestId("result-select");
  const inputResult = getByTestId("result-input");

  await selectFrom.selectOptions(AreaUnits.m);
  await selectResult.selectOptions(AreaUnits.yard);

  // 1.5 m² -> 1.794 yard²
  await inputFrom.clear();
  await inputFrom.fill("1.5");
  await expect.element(inputResult).toHaveValue("1.794");

  // change result units
  // 1.5 m² -> 16.146 ft²
  await selectResult.selectOptions(AreaUnits.ft);
  await expect.element(inputResult).toHaveValue("16.146");

  // change from units
  // 1.5 Acre -> 65340 ft²
  await selectFrom.selectOptions(AreaUnits.acre);
  await expect.element(inputResult).toHaveValue("65340");
});
