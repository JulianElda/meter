import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { QrCode } from "./qrcode";

test("render elements", async () => {
  const { getByTestId } = await render(<QrCode />);

  await expect.element(getByTestId("qrcode-url")).toBeInTheDocument();
  await expect.element(getByTestId("qrcode-url-button")).toBeInTheDocument();
});

test("generate SVG", async () => {
  const { getByTestId } = await render(<QrCode />);

  await getByTestId("qrcode-url-button").click();
  await expect.element(getByTestId("qrcode-canvas")).toBeInTheDocument();
});
