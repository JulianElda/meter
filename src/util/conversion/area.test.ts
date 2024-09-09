import { AreaUnits } from "@/src/constants/area";
import { describe, expect, test } from "vitest";
import { convertArea } from "./area";

describe("Area conversion", () => {
  describe("standard => standard", () => {
    test("100 km²: 100000000 m²", () => {
      const res = convertArea(100, AreaUnits.km, AreaUnits.m);
      expect(res).toBe(100000000);
    });

    test("1000 m²: 0.001 km²", () => {
      const res = convertArea(1000, AreaUnits.m, AreaUnits.km);
      expect(res).toBe(0.001);
    });

    test("100 km²: 38.610 mi²", () => {
      const res = convertArea(100, AreaUnits.km, AreaUnits.mile);
      expect(res).toBeCloseTo(38.61, 3);
    });

    test("100 m²: 119.599 yd²", () => {
      const res = convertArea(100, AreaUnits.m, AreaUnits.yard);
      expect(res).toBeCloseTo(119.599, 3);
    });

    test("100 mi²: 258.999 km²", () => {
      const res = convertArea(100, AreaUnits.mile, AreaUnits.km);
      expect(res).toBeCloseTo(258.999, 3);
    });

    test("100 yd²: 83.612 m²", () => {
      const res = convertArea(100, AreaUnits.yard, AreaUnits.m);
      expect(res).toBeCloseTo(83.6127, 3);
    });
  });

  describe("standard => non-standard", () => {
    test("100 km²: 10000 Hectare", () => {
      const res = convertArea(100, AreaUnits.km, AreaUnits.hectare);
      expect(res).toBe(10000);
    });

    test("100 km²: 24710.538 Acre", () => {
      const res = convertArea(100, AreaUnits.km, AreaUnits.acre);
      expect(res).toBeCloseTo(24710.5381, 3);
    });

    test("100 mi²: 25899.881 Hectare", () => {
      const res = convertArea(100, AreaUnits.mile, AreaUnits.hectare);
      expect(res).toBeCloseTo(25899.8811, 3);
    });

    test("100 mi²: 64000 Acre", () => {
      const res = convertArea(100, AreaUnits.mile, AreaUnits.acre);
      expect(res).toBe(64000);
    });

    test("4840 yd²: 1 Acre", () => {
      const res = convertArea(4840, AreaUnits.yard, AreaUnits.acre);
      expect(res).toBe(1);
    });
  });

  describe("non-standard => standard", () => {
    test("1000 Hectare: 10 km²", () => {
      const res = convertArea(1000, AreaUnits.hectare, AreaUnits.km);
      expect(res).toBe(10);
    });

    test("100 Hectare: 0.386 mi²", () => {
      const res = convertArea(100, AreaUnits.hectare, AreaUnits.mile);
      expect(res).toBeCloseTo(0.3861, 3);
    });

    test("1 Acre: 4840 yd²", () => {
      const res = convertArea(1, AreaUnits.acre, AreaUnits.yard);
      expect(res).toBe(4840);
    });

    test("100 Acre: 4840 mi²", () => {
      const res = convertArea(100, AreaUnits.acre, AreaUnits.mile);
      expect(res).toBeCloseTo(0.1562, 3);
    });

    test("100 Acre: 0.404 km²", () => {
      const res = convertArea(100, AreaUnits.acre, AreaUnits.km);
      expect(res).toBeCloseTo(0.4046, 3);
    });
  });

  describe("non-standard => non-standard", () => {
    test("100 Hectare: 247.105 Acre", () => {
      const res = convertArea(100, AreaUnits.hectare, AreaUnits.acre);
      expect(res).toBeCloseTo(247.105, 3);
    });

    test("100 Acre: 40.468 Hectare", () => {
      const res = convertArea(100, AreaUnits.acre, AreaUnits.hectare);
      expect(res).toBeCloseTo(40.4685, 3);
    });
  });
});
