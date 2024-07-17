import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeedUnits } from "src/constants/speed";
import {
  clearInput,
  expectValue,
  selectOption,
  typeInput,
} from "src/tests.helper";
import { Speed } from "./Speed";

const UNITS_1 = "from-select";
const UNITS_2 = "result-select";
const AMOUNT1_INPUT = "from-input";
const AMOUNT2_INPUT = "result-input";

describe("Metric units", () => {
  test("1 km/h: 0.278 m/s", async () => {
    render(<Speed />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, SpeedUnits.km_h);
    selectOption(user, UNITS_2, SpeedUnits.m_s);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.278");
  });

  test("1 m/s: 3.6 km/h", async () => {
    render(<Speed />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, SpeedUnits.m_s);
    selectOption(user, UNITS_2, SpeedUnits.km_h);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "3.600");
  });
});

describe("Imperial units", () => {
  test("1 km/h: 0.621 mile/h", async () => {
    render(<Speed />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, SpeedUnits.km_h);
    selectOption(user, UNITS_2, SpeedUnits.mile_h);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.621");
  });

  test("1 m/s: 0.621 mile/h", async () => {
    render(<Speed />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, SpeedUnits.m_s);
    selectOption(user, UNITS_2, SpeedUnits.mile_h);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "2.237");
  });

  test("1 mile/h: 1.609 mile/h", async () => {
    render(<Speed />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, SpeedUnits.mile_h);
    selectOption(user, UNITS_2, SpeedUnits.km_h);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "1.609");
  });

  test("1 mile/h: 0.447 m/s", async () => {
    render(<Speed />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1_INPUT);
    selectOption(user, UNITS_1, SpeedUnits.mile_h);
    selectOption(user, UNITS_2, SpeedUnits.m_s);
    await typeInput(user, AMOUNT1_INPUT, "1");
    expectValue(AMOUNT2_INPUT, "0.447");
  });
});
