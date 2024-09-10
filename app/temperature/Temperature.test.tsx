import { clearInput, expectValue, typeInput } from "@/src/tests.helper";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { Temperature } from "./Temperature";

const CELCIUS_LABEL = "celcius-input";
const FAHRENHEIT_LABEL = "fahrenheit-input";
const KELVIN_LABEL = "kelvin-input";

describe.skip("Temperature conversions", () => {
  test("100 C = 212 F = 373.15 K", async () => {
    const user = userEvent.setup();
    render(<Temperature />);

    screen.getByTestId(CELCIUS_LABEL).focus();
    await user.type(screen.getByTestId(CELCIUS_LABEL), "100");

    expect(screen.getByTestId(FAHRENHEIT_LABEL)).toHaveValue(212);
    expect(screen.getByTestId(KELVIN_LABEL)).toHaveValue(373.15);
  });

  test("37.778 C = 100 F = 310.928 K", async () => {
    const user = userEvent.setup();
    render(<Temperature />);

    screen.getByTestId(FAHRENHEIT_LABEL).focus();
    await user.type(screen.getByTestId(FAHRENHEIT_LABEL), "100");

    expect(screen.getByTestId(CELCIUS_LABEL)).toHaveValue(37.778);
    expect(screen.getByTestId(KELVIN_LABEL)).toHaveValue(310.928);
  });

  test.only("-173.150 C = -279.670 F = 100 K", async () => {
    const user = userEvent.setup();
    render(<Temperature />);

    screen.getByTestId(KELVIN_LABEL).focus();
    await user.keyboard("{Ctrl>}A{/Ctrl}{Delete}");
    await user.type(screen.getByTestId(KELVIN_LABEL), "100");

    expect(screen.getByTestId(CELCIUS_LABEL)).toHaveValue(-173.15);
    expect(screen.getByTestId(FAHRENHEIT_LABEL)).toHaveValue(-279.67);
  });
});
