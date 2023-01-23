import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { clearInput, expectValue, selectOption, typeInput } from "tests.helper";

import Length, { LengthUnits } from "./length";

const FROM_LABEL = "from-input";
const TO_LABEL = "to-input";
const INPUT_LABEL = "input-input";
const RESULT_LABEL = "result-input";

describe("Metric units", () => {
  test("1 km: 1000 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1000.000");
  });
  test("1 km: 100000 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.cm);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "100000.000");
  });
  test("1 m: 0.001 km", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.m);
    await selectOption(user, TO_LABEL, LengthUnits.km);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.001");
  });
  test("1 m: 100 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.m);
    await selectOption(user, TO_LABEL, LengthUnits.cm);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "100.000");
  });
  test("1 cm: 0.01 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.cm);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.010");
  });
});

describe("Imperial units", () => {
  test("1 feet: 12 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.ft);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "12.000");
  });
  test("1 yard: 36 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.yard);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "36.000");
  });
  test("1 yard: 3 ft", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.yard);
    await selectOption(user, TO_LABEL, LengthUnits.ft);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "3.000");
  });
  test("1 mile: 63360 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.mile);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "63360.000");
  });
  test("1 mile: 5280 ft", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.mile);
    await selectOption(user, TO_LABEL, LengthUnits.ft);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "5280.000");
  });
  test("1 mile: 1760 yard", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.mile);
    await selectOption(user, TO_LABEL, LengthUnits.yard);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1760.000");
  });
});

describe("Imperial to Metric", () => {
  test("1 mile: 1.609 km", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.mile);
    await selectOption(user, TO_LABEL, LengthUnits.km);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1.609");
  });
  test("1 mile: 160934.400 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.mile);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1609.344");
  });
  test("1 yard: 0.914 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.yard);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.914");
  });
  test("1 yard: 91.440 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.yard);
    await selectOption(user, TO_LABEL, LengthUnits.cm);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "91.440");
  });
  test("1 ft: 0.305 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.ft);
    await selectOption(user, TO_LABEL, LengthUnits.m);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.305");
  });
  test("1 ft: 30.480 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.ft);
    await selectOption(user, TO_LABEL, LengthUnits.cm);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "30.480");
  });
  test("1 inch: 2.540 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.inch);
    await selectOption(user, TO_LABEL, LengthUnits.cm);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "2.540");
  });
});

describe("Metric to Imperial", () => {
  test("1 km: 0.621 mile", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.mile);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.621");
  });
  test("1 km: 1093.613 yard", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.yard);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1093.613");
  });
  test("1 km: 3280.840 ft", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.ft);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "3280.840");
  });
  test("1 km: 39370.079 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.km);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "39370.079");
  });
  test("1 m: 1.094 yard", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.m);
    await selectOption(user, TO_LABEL, LengthUnits.yard);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "1.094");
  });
  test("1 m: 3.281 feet", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.m);
    await selectOption(user, TO_LABEL, LengthUnits.ft);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "3.281");
  });
  test("1 m: 39.370 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.m);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "39.370");
  });
  test("1 cm: 0.394 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, INPUT_LABEL);
    await selectOption(user, FROM_LABEL, LengthUnits.cm);
    await selectOption(user, TO_LABEL, LengthUnits.inch);
    await typeInput(user, INPUT_LABEL, "1");
    expectValue(RESULT_LABEL, "0.394");
  });
});
