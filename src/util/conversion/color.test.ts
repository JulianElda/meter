import { describe, expect, test } from "vitest";

import {
  calculateContrast,
  calculateLuminance,
  hexToRgb,
  hslToRgb,
  rgbToHex,
  rgbToHSL,
} from "./color";

describe("Color conversion", () => {
  test("hex to RGB", () => {
    expect(hexToRgb("#ffffff")).toBe("255, 255, 255");
    expect(hexToRgb("#000000")).toBe("0, 0, 0");
    expect(hexToRgb("#ff0000")).toBe("255, 0, 0");
  });

  test("RGB to hex", () => {
    expect(rgbToHex("255, 255, 255")).toBe("#FFFFFF");
    expect(rgbToHex("0, 0, 0")).toBe("#000000");
    expect(rgbToHex("255, 0, 0")).toBe("#FF0000");
  });

  test("RGB to HSL", () => {
    expect(rgbToHSL("255, 255, 255")).toBe("0, 0%, 100%");
    expect(rgbToHSL("0, 0, 0")).toBe("0, 0%, 0%");
    expect(rgbToHSL("255, 0, 0")).toBe("0, 100%, 50%");
  });

  test("HSL to RGB", () => {
    expect(hslToRgb("0, 0%, 100%")).toBe("255, 255, 255");
    expect(hslToRgb("0, 0%, 0%")).toBe("0, 0, 0");
    expect(hslToRgb("0, 100%, 50%")).toBe("255, 0, 0");
  });

  test("calculate luminance", () => {
    expect(calculateLuminance(255, 255, 255)).toBeCloseTo(1);
    expect(calculateLuminance(0, 0, 0)).toBeCloseTo(0);
    expect(calculateLuminance(255, 0, 0)).toBeCloseTo(0.2126);
  });

  test("calculate contrast ratio", () => {
    expect(
      calculateContrast(["255", "255", "255"], ["0", "0", "0"])
    ).toBeCloseTo(21);
    expect(
      calculateContrast(["255", "255", "255"], ["255", "255", "255"])
    ).toBeCloseTo(1);
    expect(calculateContrast(["255", "0", "0"], ["0", "0", "0"])).toBeCloseTo(
      5.25
    );
  });
});
