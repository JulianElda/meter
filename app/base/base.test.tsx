import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Base } from "./base";

test("render elements", async () => {
  const { getByTestId } = await render(<Base />);

  await expect.element(getByTestId("base-binary")).toBeInTheDocument();
  await expect.element(getByTestId("base-decimal")).toBeInTheDocument();
  await expect.element(getByTestId("base-hex")).toBeInTheDocument();

  await expect.element(getByTestId("base-binary")).toHaveValue("1100100");
  await expect.element(getByTestId("base-decimal")).toHaveValue("100");
  await expect.element(getByTestId("base-hex")).toHaveValue("64");
});

test("change binary", async () => {
  const { getByTestId } = await render(<Base />);

  await getByTestId("base-binary").clear();
  await getByTestId("base-binary").fill("1110110001010");

  await expect.element(getByTestId("base-binary")).toHaveValue("1110110001010");
  await expect.element(getByTestId("base-decimal")).toHaveValue("7562");
  await expect.element(getByTestId("base-hex")).toHaveValue("1d8a");
});

test("change decimal", async () => {
  const { getByTestId } = await render(<Base />);

  await getByTestId("base-decimal").clear();
  await getByTestId("base-decimal").fill("7562");

  await expect.element(getByTestId("base-binary")).toHaveValue("1110110001010");
  await expect.element(getByTestId("base-decimal")).toHaveValue("7562");
  await expect.element(getByTestId("base-hex")).toHaveValue("1d8a");
});

test("change hex", async () => {
  const { getByTestId } = await render(<Base />);

  await getByTestId("base-hex").clear();
  await getByTestId("base-hex").fill("1d8a");

  await expect.element(getByTestId("base-binary")).toHaveValue("1110110001010");
  await expect.element(getByTestId("base-decimal")).toHaveValue("7562");
  await expect.element(getByTestId("base-hex")).toHaveValue("1d8a");
});
