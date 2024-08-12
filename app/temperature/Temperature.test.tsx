import { clearInput, expectValue, typeInput } from "@/src/tests.helper";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test } from "vitest";
import { Temperature } from "./Temperature";

const CELCIUS_LABEL = "celcius-input";
const FAHRENHEIT_LABEL = "fahrenheit-input";
const KELVIN_LABEL = "kelvin-input";

describe("Temperature conversions", () => {
  test("100 C = 212 F = 373.15 K", async () => {
    render(<Temperature />);
    const user = userEvent.setup();
    clearInput(user, CELCIUS_LABEL);
    await typeInput(user, CELCIUS_LABEL, "100");
    expectValue(FAHRENHEIT_LABEL, "212.000");
    expectValue(KELVIN_LABEL, "373.150");
  });

  test("37.778 C = 100 F = 310.928 K", async () => {
    render(<Temperature />);
    const user = userEvent.setup();
    clearInput(user, FAHRENHEIT_LABEL);
    await typeInput(user, FAHRENHEIT_LABEL, "100");
    expectValue(CELCIUS_LABEL, "37.778");
    expectValue(KELVIN_LABEL, "310.928");
  });

  test("-173.150 C = -279.670 F = 100 K", async () => {
    render(<Temperature />);
    const user = userEvent.setup();
    clearInput(user, KELVIN_LABEL);
    await typeInput(user, KELVIN_LABEL, "100");
    expectValue(CELCIUS_LABEL, "-173.150");
    expectValue(FAHRENHEIT_LABEL, "-279.670");
  });
});
