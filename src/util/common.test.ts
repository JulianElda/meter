import { describe, expect, test } from "vitest";
import { toFixedRounding } from "./common";
import { ROUNDING } from "@/src/constants/common";

describe("toFixedRounding", () => {
  test("rounds a positive number correctly", () => {
    const input = 123.456789;
    const expected = Number(input.toFixed(ROUNDING));
    const result = toFixedRounding(input);
    expect(result).toBe(expected);
  });

  test("rounds a negative number correctly", () => {
    const input = -123.456789;
    const expected = Number(input.toFixed(ROUNDING));
    const result = toFixedRounding(input);
    expect(result).toBe(expected);
  });

  test("rounds zero correctly", () => {
    const input = 0;
    const expected = Number(input.toFixed(ROUNDING));
    const result = toFixedRounding(input);
    expect(result).toBe(expected);
  });

  test("rounds a number with more decimal places than ROUNDING correctly", () => {
    const input = 1.23456789;
    const expected = Number(input.toFixed(ROUNDING));
    const result = toFixedRounding(input);
    expect(result).toBe(expected);
  });

  test("rounds a number with fewer decimal places than ROUNDING correctly", () => {
    const input = 1.2;
    const expected = Number(input.toFixed(ROUNDING));
    const result = toFixedRounding(input);
    expect(result).toBe(expected);
  });
});
