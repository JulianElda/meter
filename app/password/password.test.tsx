import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Password } from "./password";

test("render elements", async () => {
  const { getByTestId } = await render(<Password />);

  await expect.element(getByTestId("password-numbers")).toBeInTheDocument();
  await expect.element(getByTestId("password-special")).toBeInTheDocument();
  await expect.element(getByTestId("password-length")).toBeInTheDocument();
  await expect.element(getByTestId("password-password")).toBeInTheDocument();
  await expect.element(getByTestId("password-copy")).toBeInTheDocument();
  await expect.element(getByTestId("password-refresh")).toBeInTheDocument();
});
