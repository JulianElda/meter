import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Weight } from "./weight";

test("render elements", async () => {
  const { getByTestId } = await render(<Weight />);

  await expect.element(getByTestId("from-input")).toBeInTheDocument();
  await expect.element(getByTestId("from-select")).toBeInTheDocument();
  await expect.element(getByTestId("result-input")).toBeInTheDocument();
  await expect.element(getByTestId("result-select")).toBeInTheDocument();
});

test("change input amount", async () => {
  const { getByTestId } = await render(<Weight />);

  await getByTestId("from-input").clear();
  await getByTestId("from-input").fill("200");

  await expect.element(getByTestId("from-input")).toHaveValue(200);
  await expect.element(getByTestId("result-input")).toHaveValue(440.925);
});

test("change input units", async () => {
  const { getByTestId } = await render(<Weight />);

  await getByTestId("from-select").selectOptions("stone");

  await expect.element(getByTestId("from-select")).toHaveValue("stone");
  await expect.element(getByTestId("result-input")).toHaveValue(1400);
});

test("change result units", async () => {
  const { getByTestId } = await render(<Weight />);

  await getByTestId("result-select").selectOptions("stone");

  await expect.element(getByTestId("result-select")).toHaveValue("stone");
  await expect.element(getByTestId("result-input")).toHaveValue(15.747);
});
