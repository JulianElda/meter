import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { SpeedUnits } from "@/src/constants/speed";

import { Speed } from "./speed";

test("render elements", async () => {
  const { getByTestId } = await render(<Speed />);

  await expect.element(getByTestId("from-input")).toBeInTheDocument();
  await expect.element(getByTestId("from-select")).toBeInTheDocument();
  await expect.element(getByTestId("result-input")).toBeInTheDocument();
  await expect.element(getByTestId("result-select")).toBeInTheDocument();
});

test("change input amount", async () => {
  const { getByTestId } = await render(<Speed />);

  await getByTestId("from-input").clear();
  await getByTestId("from-input").fill("200");

  await expect.element(getByTestId("from-input")).toHaveValue(200);
  await expect.element(getByTestId("result-input")).toHaveValue(321.869);
});

test("change input units", async () => {
  const { getByTestId } = await render(<Speed />);

  await getByTestId("from-select").selectOptions(SpeedUnits.m_s);

  await expect.element(getByTestId("from-select")).toHaveValue(SpeedUnits.m_s);
  await expect.element(getByTestId("result-input")).toHaveValue(360);
});

test("change result units", async () => {
  const { getByTestId } = await render(<Speed />);

  await getByTestId("result-select").selectOptions(SpeedUnits.m_s);

  await expect
    .element(getByTestId("result-select"))
    .toHaveValue(SpeedUnits.m_s);
  await expect.element(getByTestId("result-input")).toHaveValue(44.704);
});
