import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Temperature } from "./temperature";

test("render elements", async () => {
  const { getByTestId } = await render(<Temperature />);

  await expect.element(getByTestId("celcius-input")).toBeInTheDocument();
  await expect.element(getByTestId("fahrenheit-input")).toBeInTheDocument();
  await expect.element(getByTestId("kelvin-input")).toBeInTheDocument();
});

// 100 C = 212 F = 373.15 K
test("change Celcius", async () => {
  const { getByTestId } = await render(<Temperature />);

  await getByTestId("celcius-input").clear();
  await getByTestId("celcius-input").fill("100");

  await expect.element(getByTestId("celcius-input")).toHaveValue(100);
  await expect.element(getByTestId("fahrenheit-input")).toHaveValue(212);
  await expect.element(getByTestId("kelvin-input")).toHaveValue(373.15);
});

// 37.778 C = 100 F = 310.928 K
test("change Fahrenheit", async () => {
  const { getByTestId } = await render(<Temperature />);

  await getByTestId("fahrenheit-input").clear();
  await getByTestId("fahrenheit-input").fill("100");

  await expect.element(getByTestId("celcius-input")).toHaveValue(37.778);
  await expect.element(getByTestId("fahrenheit-input")).toHaveValue(100);
  await expect.element(getByTestId("kelvin-input")).toHaveValue(310.928);
});

// -173.150 C = -279.670 F = 100 K
test("change Kelvin", async () => {
  const { getByTestId } = await render(<Temperature />);

  await getByTestId("kelvin-input").clear();
  await getByTestId("kelvin-input").fill("100");

  await expect.element(getByTestId("celcius-input")).toHaveValue(-173.15);
  await expect.element(getByTestId("fahrenheit-input")).toHaveValue(-279.67);
  await expect.element(getByTestId("kelvin-input")).toHaveValue(100);
});
