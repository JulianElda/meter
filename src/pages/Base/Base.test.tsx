import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { clearInput, expectValue, typeInput } from "src/tests.helper";
import { Base } from "./Base";

const BINARY_LABEL = "base-binary";
const DECIMAL_LABEL = "base-decimal";
const HEX_LABEL = "base-hex";

describe("base conversion", () => {
  test("initial render: 1100100, 100, 64", () => {
    render(<Base />);
    expectValue(BINARY_LABEL, "1100100");
    expectValue(DECIMAL_LABEL, "100");
    expectValue(HEX_LABEL, "64");
  });

  test("change binary", async () => {
    render(<Base />);
    const user = userEvent.setup();
    clearInput(user, BINARY_LABEL);
    await typeInput(user, BINARY_LABEL, "1110110001010");
    expectValue(BINARY_LABEL, "1110110001010");
    expectValue(DECIMAL_LABEL, "7562");
    expectValue(HEX_LABEL, "1d8a");
  });

  test("change decimal", async () => {
    render(<Base />);
    const user = userEvent.setup();
    clearInput(user, DECIMAL_LABEL);
    await typeInput(user, DECIMAL_LABEL, "7562");
    expectValue(BINARY_LABEL, "1110110001010");
    expectValue(DECIMAL_LABEL, "7562");
    expectValue(HEX_LABEL, "1d8a");
  });

  test("change hex", async () => {
    render(<Base />);
    const user = userEvent.setup();
    clearInput(user, HEX_LABEL);
    await typeInput(user, HEX_LABEL, "1d8a");
    expectValue(BINARY_LABEL, "1110110001010");
    expectValue(DECIMAL_LABEL, "7562");
    expectValue(HEX_LABEL, "1d8a");
  });
});
