import { LengthUnits } from "@/src/constants/length";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { Length } from "./Length";

const UNITS_1 = "from-select";
const UNITS_2 = "result-select";
const AMOUNT1_INPUT = "from-input";
const AMOUNT2_INPUT = "result-input";

describe("Length component", () => {
  test("100 cm: 39.37 inch", async () => {
    const user = userEvent.setup();
    render(<Length />);

    await user.selectOptions(screen.getByTestId(UNITS_1), LengthUnits.cm);
    await user.selectOptions(screen.getByTestId(UNITS_2), LengthUnits.inch);

    expect(screen.getByTestId(AMOUNT2_INPUT)).toHaveValue(39.37);
  });
});
