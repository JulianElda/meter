import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LengthUnits } from "src/constants/length";
import {
  clearInput,
  expectValue,
  selectOption,
  typeInput,
} from "src/tests.helper";
import Length from "./length";

const UNITS_1 = "from-select";
const UNITS_2 = "result-select";
const AMOUNT1_INPUT = "from-input";
const AMOUNT2_INPUT = "result-input";

describe("Metric units", () => {
  test("1 km: 1000 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.km);
    selectOption(user, UNITS_2, LengthUnits.m);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1000.000");
  });
  test("1 km: 100000 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.km);
    selectOption(user, UNITS_2, LengthUnits.cm);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "100000.000");
  });
  test("1 m: 0.001 km", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.m);
    selectOption(user, UNITS_2, LengthUnits.km);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.001");
  });
  test("1 m: 100 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.m);
    selectOption(user, UNITS_2, LengthUnits.cm);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "100.000");
  });
  test("1 cm: 0.01 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.cm);
    selectOption(user, UNITS_2, LengthUnits.m);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.010");
  });
});

describe("Imperial units", () => {
  test("1 feet: 12 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.ft);
    selectOption(user, UNITS_2, LengthUnits.inch);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "12.000");
  });
  test("1 yard: 36 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.yard);
    selectOption(user, UNITS_2, LengthUnits.inch);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "36.000");
  });
  test("1 yard: 3 ft", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.yard);
    selectOption(user, UNITS_2, LengthUnits.ft);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "3.000");
  });
  test("1 mile: 63360 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.mile);
    selectOption(user, UNITS_2, LengthUnits.inch);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "63360.000");
  });
  test("1 mile: 5280 ft", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.mile);
    selectOption(user, UNITS_2, LengthUnits.ft);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "5280.000");
  });
  test("1 mile: 1760 yard", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.mile);
    selectOption(user, UNITS_2, LengthUnits.yard);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1760.000");
  });
});

describe("Imperial to Metric", () => {
  test("1 mile: 1.609 km", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.mile);
    selectOption(user, UNITS_2, LengthUnits.km);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1.609");
  });
  test("1 mile: 160934.400 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.mile);
    selectOption(user, UNITS_2, LengthUnits.m);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1609.344");
  });
  test("1 yard: 0.914 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.yard);
    selectOption(user, UNITS_2, LengthUnits.m);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.914");
  });
  test("1 yard: 91.440 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.yard);
    selectOption(user, UNITS_2, LengthUnits.cm);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "91.440");
  });
  test("1 ft: 0.305 m", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.ft);
    selectOption(user, UNITS_2, LengthUnits.m);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.305");
  });
  test("1 ft: 30.480 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.ft);
    selectOption(user, UNITS_2, LengthUnits.cm);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "30.480");
  });
  test("1 inch: 2.540 cm", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.inch);
    selectOption(user, UNITS_2, LengthUnits.cm);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "2.540");
  });
});

describe("Metric to Imperial", () => {
  test("1 km: 0.621 mile", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.km);
    selectOption(user, UNITS_2, LengthUnits.mile);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.621");
  });
  test("1 km: 1093.613 yard", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.km);
    selectOption(user, UNITS_2, LengthUnits.yard);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1093.613");
  });
  test("1 km: 3280.840 ft", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.km);
    selectOption(user, UNITS_2, LengthUnits.ft);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "3280.840");
  });
  test("1 km: 39370.079 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.km);
    selectOption(user, UNITS_2, LengthUnits.inch);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "39370.079");
  });
  test("1 m: 1.094 yard", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.m);
    selectOption(user, UNITS_2, LengthUnits.yard);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1.094");
  });
  test("1 m: 3.281 feet", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.m);
    selectOption(user, UNITS_2, LengthUnits.ft);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "3.281");
  });
  test("1 m: 39.370 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.m);
    selectOption(user, UNITS_2, LengthUnits.inch);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "39.370");
  });
  test("1 cm: 0.394 inch", async () => {
    render(<Length />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, LengthUnits.cm);
    selectOption(user, UNITS_2, LengthUnits.inch);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.394");
  });
});
