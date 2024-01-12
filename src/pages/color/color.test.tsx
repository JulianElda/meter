import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { clearInput, expectValue, typeInput } from "src/tests.helper";
import Color from "./color";

const HEX_LABEL = "color-hex";
const RGB_LABEL = "color-rgb";
const HSL_LABEL = "color-hsl";

describe.skip("color conversion", () => {
  test("intial render: #DC143C rgb(220, 20, 60) hsl(348, 83%, 47%)", () => {
    render(<Color />);
    expectValue(HEX_LABEL, "#DC143C");
    expectValue(RGB_LABEL, "64, 75, 10");
    expectValue(HSL_LABEL, "348, 83%, 47%");
  });

  test("change hex", async () => {
    render(<Color />);
    const user = userEvent.setup();
    clearInput(user, HEX_LABEL);
    await typeInput(user, HEX_LABEL, "#AFDBF6");
    expectValue(HEX_LABEL, "#AFDBF6");
    expectValue(RGB_LABEL, "175, 219, 246");
    expectValue(HSL_LABEL, "203, 80%, 83%");
  });

  test("change rgb", async () => {
    render(<Color />);
    const user = userEvent.setup();
    clearInput(user, RGB_LABEL);
    await typeInput(user, RGB_LABEL, "175, 219, 246");
    expectValue(HEX_LABEL, "#AFDBF6");
    expectValue(RGB_LABEL, "175, 219, 246");
    expectValue(HSL_LABEL, "203, 80%, 83%");
  });

  test("change hsl", async () => {
    render(<Color />);
    const user = userEvent.setup();
    clearInput(user, HSL_LABEL);
    await typeInput(user, HSL_LABEL, "203, 80%, 83%");
    expectValue(HEX_LABEL, "#AFDBF6");
    expectValue(RGB_LABEL, "175, 219, 246");
    expectValue(HSL_LABEL, "203, 80%, 83%");
  });
});
