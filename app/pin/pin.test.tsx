import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Pin } from "./pin";

test("render elements", async () => {
  const { getByTestId } = await render(<Pin />);

  await expect.element(getByTestId("pin-input")).toBeInTheDocument();
  await expect.element(getByTestId("pin-pin")).toBeInTheDocument();
  await expect.element(getByTestId("pin-copy")).toBeInTheDocument();
  await expect.element(getByTestId("pin-refresh")).toBeInTheDocument();
});
