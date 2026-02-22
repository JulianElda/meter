import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Guid } from "./guid";

test("render elements", async () => {
  const { getByTestId } = await render(<Guid />);

  await expect.element(getByTestId("guid-guid")).toBeInTheDocument();
  await expect.element(getByTestId("guid-copy")).toBeInTheDocument();
  await expect.element(getByTestId("guid-refresh")).toBeInTheDocument();
});
