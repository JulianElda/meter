import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { selectOption, expectInDocument } from "tests.helper";

import App, { Categories } from "./app";

const CATEGORY_LABEL = "category-input";
const RESULT_LABEL = "result-input";
const HEX_LABEL = "hex-input";

describe("category", () => {
  test("select length", async () => {
    render(<App />);
    const user = userEvent.setup();
    await selectOption(user, CATEGORY_LABEL, Categories.LENGTH);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });

  test("select color", async () => {
    render(<App />);
    const user = userEvent.setup();
    await selectOption(user, CATEGORY_LABEL, Categories.COLOR);
    await waitFor(async () => {
      expectInDocument(HEX_LABEL);
    });
  });

  test("select temperature", async () => {
    render(<App />);
    const user = userEvent.setup();
    await selectOption(user, CATEGORY_LABEL, Categories.TEMPERATURE);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });
});
