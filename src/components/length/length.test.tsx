import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expectValue, selectOption, typeInput } from "tests.helper";

import Length, { LengthUnits } from "./length";

const FROM_LABEL = "from";
const TO_LABEL = "to";
const INPUT_LABEL = "input";
const RESULT_LABEL = "result";

const user = userEvent.setup();

// a bit different since useEffect fires on each keystroke
describe("valid inputs", () => {
  test("empty string", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, " ");
    expectValue(RESULT_LABEL, "0.000");
  });

  test("NaN", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "TEST");
    expectValue(RESULT_LABEL, "0.000");
  });
});

describe("SI units", () => {
  test("1 km: 1000 m", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1000.000");
  });

  test("1 m: 0.001 km", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.m);
    await selectOption(user, TO_LABEL, LengthUnits.km);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.001");
  });
});

describe("Imperial units", () => {
  test("1 feet: 12 inch", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.ft);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "12.000");
  });
});

describe("Different units", () => {
  test("1 mile: 1609.340 km", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.mile);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1609.340");
  });

  test("1 km: 0.621 mile", async () => {
    render(<Length />);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.mile);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.621");
  });
});
