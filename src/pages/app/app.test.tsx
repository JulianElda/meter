import { render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { selectOption, expectInDocument } from "tests.helper";

import { Categories } from "./app";
import AppRouting from "pages/routing";

const CATEGORY_LABEL = "category-input";
const RESULT_LABEL = "result-input";
const HEX_LABEL = "hex-input";

describe("category", () => {
  const renderWithRouter = function () {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/*" element={<AppRouting />} />
        </Routes>
      </MemoryRouter>
    );
  };

  test("select length", async () => {
    renderWithRouter();
    const user = userEvent.setup();
    selectOption(user, CATEGORY_LABEL, Categories.LENGTH);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });

  test("select color", async () => {
    renderWithRouter();
    const user = userEvent.setup();
    selectOption(user, CATEGORY_LABEL, Categories.COLOR);
    await waitFor(async () => {
      expectInDocument(HEX_LABEL);
    });
  });

  test("select temperature", async () => {
    renderWithRouter();
    const user = userEvent.setup();
    selectOption(user, CATEGORY_LABEL, Categories.TEMPERATURE);
    await waitFor(async () => {
      expectInDocument(RESULT_LABEL);
    });
  });
});
