import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Lorem } from "./lorem";
import { loremText } from "./lorem.data";

test("render elements", async () => {
  const { getByTestId } = await render(<Lorem loremText={loremText} />);

  await expect.element(getByTestId("lorem-words")).toBeInTheDocument();
  await expect.element(getByTestId("lorem-lorem")).toBeInTheDocument();
  await expect.element(getByTestId("lorem-copy")).toBeInTheDocument();
});
