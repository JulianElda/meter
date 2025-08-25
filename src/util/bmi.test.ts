import { describe, expect, test } from "vitest";

import { calculateBmi, categorizeBmi } from "./bmi";

describe("calculateBmi", () => {
  describe("BMI classes", () => {
    test("normal weight", () => {
      expect(calculateBmi(70, 1.75)).toBeCloseTo(22.86, 2);
    });

    test("underweight", () => {
      expect(calculateBmi(50, 1.7)).toBeCloseTo(17.3, 2);
    });

    test("overweight", () => {
      expect(calculateBmi(85, 1.75)).toBeCloseTo(27.76, 2);
    });

    test("obesity class I", () => {
      expect(calculateBmi(95, 1.75)).toBeCloseTo(31.02, 2);
    });

    test("obesity class II", () => {
      expect(calculateBmi(110, 1.75)).toBeCloseTo(35.92, 2);
    });

    test("obesity class III", () => {
      expect(calculateBmi(125, 1.75)).toBeCloseTo(40.82, 2);
    });
  });

  test("handles decimal weight and height", () => {
    expect(calculateBmi(68.5, 1.72)).toBeCloseTo(23.15, 2);
  });

  describe("throws errors for invalid inputs", () => {
    test("throws error for zero height", () => {
      expect(() => calculateBmi(70, 0)).toThrow(
        "Height must be greater than zero"
      );
    });

    test("throws error for zero weight", () => {
      expect(() => calculateBmi(0, 1.75)).toThrow(
        "Weight must be greater than zero"
      );
    });

    test("throws error for negative height", () => {
      expect(() => calculateBmi(70, -1.75)).toThrow(
        "Height must be greater than zero"
      );
    });

    test("throws error for negative weight", () => {
      expect(() => calculateBmi(-70, 1.75)).toThrow(
        "Weight must be greater than zero"
      );
    });
  });
});

describe("categorizeBmi", () => {
  test("categorizes underweight", () => {
    expect(categorizeBmi(17)).toBe("Underweight");
  });

  test("categorizes normal weight", () => {
    expect(categorizeBmi(22)).toBe("Normal weight");
  });

  test("categorizes overweight", () => {
    expect(categorizeBmi(27)).toBe("Overweight");
  });

  test("categorizes obesity class I", () => {
    expect(categorizeBmi(32)).toBe("Obesity class I");
  });

  test("categorizes obesity class II", () => {
    expect(categorizeBmi(37)).toBe("Obesity class II");
  });

  test("categorizes obesity class III", () => {
    expect(categorizeBmi(42)).toBe("Obesity class III");
  });
});
