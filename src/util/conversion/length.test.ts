import { describe, expect, test } from "vitest";

import { LengthUnits } from "@/src/constants/length";

import { convertLength } from "./length";

describe("Length conversion", () => {
  describe("Metric units", () => {
    test("1 km: 1000 m", () => {
      const res = convertLength(1, LengthUnits.km, LengthUnits.m);
      expect(res).toBe(1000);
    });

    test("1 km: 100000 cm", () => {
      const res = convertLength(1, LengthUnits.km, LengthUnits.cm);
      expect(res).toBe(100_000);
    });

    test("1 m: 0.001 km", async () => {
      const res = convertLength(1, LengthUnits.m, LengthUnits.km);
      expect(res).toBe(0.001);
    });

    test("1 m: 100 cm", async () => {
      const res = convertLength(1, LengthUnits.m, LengthUnits.cm);
      expect(res).toBe(100);
    });

    test("1 cm: 0.01 m", async () => {
      const res = convertLength(1, LengthUnits.cm, LengthUnits.m);
      expect(res).toBe(0.01);
    });
  });

  describe("Imperial units", () => {
    test("1 feet: 12 inch", async () => {
      const res = convertLength(1, LengthUnits.ft, LengthUnits.inch);
      expect(res).toBe(12);
    });

    test("1 yard: 36 inch", async () => {
      const res = convertLength(1, LengthUnits.yard, LengthUnits.inch);
      expect(res).toBe(36);
    });

    test("1 yard: 3 feet", async () => {
      const res = convertLength(1, LengthUnits.yard, LengthUnits.ft);
      expect(res).toBe(3);
    });

    test("1 mile: 63360 inch", async () => {
      const res = convertLength(1, LengthUnits.mile, LengthUnits.inch);
      expect(res).toBe(63_360);
    });

    test("1 mile: 5280 ft", async () => {
      const res = convertLength(1, LengthUnits.mile, LengthUnits.ft);
      expect(res).toBe(5280);
    });

    test("1 mile: 1760 yard", async () => {
      const res = convertLength(1, LengthUnits.mile, LengthUnits.yard);
      expect(res).toBe(1760);
    });
  });

  describe("Imperial to Metric", () => {
    test("1 mile: 1.609 km", async () => {
      const res = convertLength(1, LengthUnits.mile, LengthUnits.km);
      expect(res).toBeCloseTo(1.609, 3);
    });

    test("1 mile: 1609.344 m", async () => {
      const res = convertLength(1, LengthUnits.mile, LengthUnits.m);
      expect(res).toBeCloseTo(1609.344, 3);
    });

    test("1 yard: 0.914 m", async () => {
      const res = convertLength(1, LengthUnits.yard, LengthUnits.m);
      expect(res).toBeCloseTo(0.914, 3);
    });

    test("1 yard: 91.440 cm", async () => {
      const res = convertLength(1, LengthUnits.yard, LengthUnits.cm);
      expect(res).toBeCloseTo(91.44, 3);
    });

    test("1 ft: 0.305 m", async () => {
      const res = convertLength(1, LengthUnits.ft, LengthUnits.m);
      expect(res).toBeCloseTo(0.305, 3);
    });

    test("1 inch: 2.540 cm", async () => {
      const res = convertLength(1, LengthUnits.inch, LengthUnits.cm);
      expect(res).toBeCloseTo(2.54, 3);
    });
  });

  describe("Metric to Imperial", () => {
    test("1 km: 0.621 mile", async () => {
      const res = convertLength(1, LengthUnits.km, LengthUnits.mile);
      expect(res).toBeCloseTo(0.621, 3);
    });

    test("1 km: 1093.613 yard", async () => {
      const res = convertLength(1, LengthUnits.km, LengthUnits.yard);
      expect(res).toBeCloseTo(1093.613, 3);
    });

    test("1 km: 3280.840 ft", async () => {
      const res = convertLength(1, LengthUnits.km, LengthUnits.ft);
      expect(res).toBeCloseTo(3280.84, 3);
    });

    test("1 km: 39370.079 inch", async () => {
      const res = convertLength(1, LengthUnits.km, LengthUnits.inch);
      expect(res).toBeCloseTo(39_370.079, 3);
    });

    test("1 m: 1.094 yard", async () => {
      const res = convertLength(1, LengthUnits.m, LengthUnits.yard);
      expect(res).toBeCloseTo(1.094, 3);
    });

    test("1 m: 3.281 feet", async () => {
      const res = convertLength(1, LengthUnits.m, LengthUnits.ft);
      expect(res).toBeCloseTo(3.281, 3);
    });

    test("1 m: 39.370 inch", async () => {
      const res = convertLength(1, LengthUnits.m, LengthUnits.inch);
      expect(res).toBeCloseTo(39.37, 3);
    });

    test("1 cm: 0.394 inch", async () => {
      const res = convertLength(1, LengthUnits.cm, LengthUnits.inch);
      expect(res).toBeCloseTo(0.394, 3);
    });
  });
});
