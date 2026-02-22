import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Color } from "./color";

test("render elements", async () => {
  const { getByTestId } = await render(<Color />);

  await expect.element(getByTestId("color-hex")).toBeInTheDocument();
  await expect.element(getByTestId("color-rgb")).toBeInTheDocument();
  await expect.element(getByTestId("color-hsl")).toBeInTheDocument();

  await expect.element(getByTestId("color-hex")).toHaveValue("#DC143C");
  await expect.element(getByTestId("color-rgb")).toHaveValue("64, 75, 10");
  await expect.element(getByTestId("color-hsl")).toHaveValue("348, 83%, 47%");
});

test("change hex", async () => {
  const { getByTestId } = await render(<Color />);

  await getByTestId("color-hex").clear();
  await getByTestId("color-hex").fill("#AFDBF6");

  await expect.element(getByTestId("color-hex")).toHaveValue("#AFDBF6");
  await expect.element(getByTestId("color-rgb")).toHaveValue("175, 219, 246");
  await expect.element(getByTestId("color-hsl")).toHaveValue("203, 80%, 83%");
});

test("change rgb", async () => {
  const { getByTestId } = await render(<Color />);

  await getByTestId("color-rgb").clear();
  await getByTestId("color-rgb").fill("175, 219, 246");

  await expect.element(getByTestId("color-hex")).toHaveValue("#AFDBF6");
  await expect.element(getByTestId("color-rgb")).toHaveValue("175, 219, 246");
  await expect.element(getByTestId("color-hsl")).toHaveValue("203, 80%, 83%");
});

test("change hsl", async () => {
  const { getByTestId } = await render(<Color />);

  await getByTestId("color-hsl").clear();
  await getByTestId("color-hsl").fill("203, 80%, 83%");

  await expect.element(getByTestId("color-hex")).toHaveValue("#B1DCF6");
  await expect.element(getByTestId("color-rgb")).toHaveValue("177, 220, 246");
  await expect.element(getByTestId("color-hsl")).toHaveValue("203, 80%, 83%");
});
