import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { clearInput, expectValue, selectOption, typeInput } from "tests.helper";

import Temperature, { Temperatures } from "./temperature";

const FROM_LABEL = "from";
const TO_LABEL = "to";
const INPUT_LABEL = "input";
const RESULT_LABEL = "result";

const user = userEvent.setup();

describe("to Kelvin", () => {
  test("100 K: 100.000 K", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.K);
    await selectOption(user, TO_LABEL, Temperatures.K);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "100.000");
  });

  test("100 F: 310.928 K", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.F);
    await selectOption(user, TO_LABEL, Temperatures.K);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "310.928");
  });

  test("100 C: 373.150 K", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.C);
    await selectOption(user, TO_LABEL, Temperatures.K);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "373.150");
  });
});

describe("to Fahrenheit", () => {
  test("100 K: -279.670 F", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.K);
    await selectOption(user, TO_LABEL, Temperatures.F);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "-279.670");
  });

  test("100 F: 100.000 F", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.F);
    await selectOption(user, TO_LABEL, Temperatures.F);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "100.000");
  });

  test("100 C: 212.000 F", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.C);
    await selectOption(user, TO_LABEL, Temperatures.F);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "212.000");
  });
});

describe("to Celcius", () => {
  test("100 K: -173.150 C", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.K);
    await selectOption(user, TO_LABEL, Temperatures.C);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "-173.150");
  });

  test("100 F: 37.778 C", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.F);
    await selectOption(user, TO_LABEL, Temperatures.C);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "37.778");
  });

  test("100 C: 100.000 C", async () => {
    render(<Temperature />);
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, Temperatures.C);
    await selectOption(user, TO_LABEL, Temperatures.C);
    await typeInput(user, INPUT_LABEL, "100");
    expectValue(RESULT_LABEL, "100.000");
  });
});
