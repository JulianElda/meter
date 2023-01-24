import { render, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { selectOption, expectInDocument } from "tests.helper";

import App, { Categories } from "./app";

const CATEGORY_LABEL = "category-input";
const RESULT_LABEL = "result-input";
const HEX_LABEL = "hex-input";

describe.skip("category", () => {
  test("select length", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    await selectOption(user, CATEGORY_LABEL, Categories.LENGTH);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });

  test("select color", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await selectOption(user, CATEGORY_LABEL, Categories.COLOR);
    await waitFor(async () => {
      expectInDocument(HEX_LABEL);
    });
  });

  test("select temperature", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await selectOption(user, CATEGORY_LABEL, Categories.TEMPERATURE);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });
});
