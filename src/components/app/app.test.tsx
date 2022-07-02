import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { selectOption, expectInDocument } from "tests.helper";

import App, { Categories } from "./app";

const CATEGORY_LABEL = "Category";
const RESULT_LABEL = "Result";
const HEX_LABEL = "Hex";

const user = userEvent.setup();

describe("category", () => {
  test("default color", async () => {
    render(<App />);
    await waitFor(async () => {
      expectInDocument(HEX_LABEL);
    });
  });

  test("select length", async () => {
    render(<App />);
    await selectOption(user, CATEGORY_LABEL, Categories.LENGTH);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });

  test("select color", async () => {
    render(<App />);
    await selectOption(user, CATEGORY_LABEL, Categories.COLOR);
    await waitFor(async () => {
      expectInDocument(HEX_LABEL);
    });
  });
});
