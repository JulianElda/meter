import { describe, expect, test } from "vitest";

import { WeightUnits } from "@/src/constants/weight";

import { convertWeight } from "./weight";

describe("Weight conversion", () => {
  describe("Metric => Metric", () => {
    test("1 kg: 1000 g", () => {
      const res = convertWeight(1, WeightUnits.kg, WeightUnits.g);
      expect(res).toBeCloseTo(1000, 3);
    });

    test("1 kg: 1000 g", () => {
      const res = convertWeight(1, WeightUnits.kg, WeightUnits.g);
      expect(res).toBeCloseTo(1000, 3);
    });
  });

  describe("Metric => Imperial", () => {
    test("10 kg: 22.046 pound", () => {
      const res = convertWeight(10, WeightUnits.kg, WeightUnits.pound);
      expect(res).toBeCloseTo(22.0462, 3);
    });

    test("10 kg: 1.574 stone", () => {
      const res = convertWeight(10, WeightUnits.kg, WeightUnits.stone);
      expect(res).toBeCloseTo(1.5747, 3);
    });
  });

  describe("Imperial => Metric", () => {
    test("10 pound: 4.535 kg", () => {
      const res = convertWeight(10, WeightUnits.pound, WeightUnits.kg);
      expect(res).toBeCloseTo(4.5359, 3);
    });

    test("10 stone: 63.502 kg", () => {
      const res = convertWeight(10, WeightUnits.stone, WeightUnits.kg);
      expect(res).toBeCloseTo(63.5029, 3);
    });
  });

  describe("Imperial => Imperial", () => {
    test("14 pound: 1 stone", () => {
      const res = convertWeight(14, WeightUnits.pound, WeightUnits.stone);
      expect(res).toBeCloseTo(1, 3);
    });

    test("1 stone: 14 pound", () => {
      const res = convertWeight(1, WeightUnits.stone, WeightUnits.pound);
      expect(res).toBeCloseTo(14, 3);
    });
  });
});
