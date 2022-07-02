import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  selectOptionFrom,
  selectOptionTo,
  typeInput,
  expectResult,
} from "tests.helper";

import Length from "./length";

const FROM_LABEL = "From";
const TO_LABEL = "To";
const INPUT_LABEL = "Input";
const RESULT_LABEL = "Result";

const user = userEvent.setup();

describe("SI units", () => {
  test("1 km: 1000 m", async () => {
    render(<Length />);
    await selectOptionFrom(user, FROM_LABEL, "km");
    await selectOptionTo(user, TO_LABEL, "m");
    await typeInput(user, INPUT_LABEL, "1");
    expectResult(RESULT_LABEL, "1000.000");
  });

  test("1 m: 0.001 km", async () => {
    render(<Length />);
    await selectOptionFrom(user, FROM_LABEL, "m");
    await selectOptionTo(user, TO_LABEL, "km");
    await typeInput(user, INPUT_LABEL, "1");
    expectResult(RESULT_LABEL, "0.001");
  });
});

describe("Imperial units", () => {
  test("1 feet: 12 inch", async () => {
    render(<Length />);
    await selectOptionFrom(user, FROM_LABEL, "ft");
    await selectOptionTo(user, TO_LABEL, "inch");
    await typeInput(user, INPUT_LABEL, "1");
    expectResult(RESULT_LABEL, "12.000");
  });
});

describe("Different units", () => {
  test("1 mile: 1609.340 km", async () => {
    render(<Length />);
    await selectOptionFrom(user, FROM_LABEL, "mile");
    await selectOptionTo(user, TO_LABEL, "m");
    await typeInput(user, INPUT_LABEL, "1");
    expectResult(RESULT_LABEL, "1609.340");
  });

  test("1 km: 0.621 mile", async () => {
    render(<Length />);
    await selectOptionFrom(user, FROM_LABEL, "km");
    await selectOptionTo(user, TO_LABEL, "mile");
    await typeInput(user, INPUT_LABEL, "1");
    expectResult(RESULT_LABEL, "0.621");
  });
});
