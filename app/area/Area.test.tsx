import { AreaUnits } from "@/src/constants/area";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { Area } from "./Area";

const UNITS_1 = "from-select";
const UNITS_2 = "result-select";
const AMOUNT1_INPUT = "from-input";
const AMOUNT2_INPUT = "result-input";

describe("standard => standard", () => {
  test("1 km²: 0.386 mile²", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.km);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.mile);

    expect(screen.getByTestId(AMOUNT2_INPUT), "0.386");
  });

  test("1 m²: 10.763 ft²", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.m);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.ft);

    expect(screen.getByTestId(AMOUNT2_INPUT), "10.763");
  });
});

describe("standard => non-standard", () => {
  test("1 km²: 100 Hectare", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.km);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.hectare);

    expect(screen.getByTestId(AMOUNT2_INPUT), "100");
  });

  test("1 km²: 247.105 Acre", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.km);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.acre);

    expect(screen.getByTestId(AMOUNT2_INPUT), "247.105");
  });

  test("1 mi²: 258.999 Hectare", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.mile);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.hectare);

    expect(screen.getByTestId(AMOUNT2_INPUT), "258.999");
  });

  test("1 mi²: 640 Hectare", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.mile);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.acre);

    expect(screen.getByTestId(AMOUNT2_INPUT), "640");
  });
});

describe("non-standard => non-standard", () => {
  test("1 Hectare: 2.471 Acre", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.hectare);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.acre);

    expect(screen.getByTestId(AMOUNT2_INPUT), "2.471");
  });

  test("1 Acre: 0.405 Hectare", async () => {
    render(<Area />);
    const user = userEvent.setup();
    user.clear(screen.getByTestId(AMOUNT1_INPUT));
    await user.type(screen.getByTestId(AMOUNT1_INPUT), "1");

    user.selectOptions(screen.getByTestId(UNITS_1), AreaUnits.acre);
    user.selectOptions(screen.getByTestId(UNITS_2), AreaUnits.hectare);

    expect(screen.getByTestId(AMOUNT2_INPUT), "0.405");
  });
});
