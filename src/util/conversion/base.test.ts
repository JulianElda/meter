import { describe, test, it, expect } from "vitest";
import { convertBaseNumber } from "./base";

describe("Base conversion", () => {
  test("base 10 to base 2", () => {
    expect(convertBaseNumber("10", 10, 2)).toBe("1010");
  });

  test("base 2 to base 10", () => {
    expect(convertBaseNumber("1010", 2, 10)).toBe("10");
  });

  test("base 16 to base 10", () => {
    expect(convertBaseNumber("A", 16, 10)).toBe("10");
  });

  test("base 8 to base 16", () => {
    expect(convertBaseNumber("17", 8, 16)).toBe("f");
  });

  test("base 10 to base 36", () => {
    expect(convertBaseNumber("123456789", 10, 36)).toBe("21i3v9");
  });

  test("return '0' for invalid source base", () => {
    expect(convertBaseNumber("10", 1, 10)).toBe("0");
  });

  test("return '0' for invalid target base", () => {
    expect(convertBaseNumber("10", 10, 37)).toBe("0");
  });

  test("return '0' for non-numeric input", () => {
    expect(convertBaseNumber("G", 16, 10)).toBe("0");
  });

  test("return '0' for empty input", () => {
    expect(convertBaseNumber("", 10, 2)).toBe("0");
  });

  test("return '0' for invalid number in source base", () => {
    expect(convertBaseNumber("2", 2, 10)).toBe("0");
  });
});
