import { describe, expect, test } from "vitest";

import { VolumeUnits } from "@/src/constants/volume";

import { convertVolume } from "./volume";

describe("Volume conversion", () => {
  describe("SI => SI", () => {
    test("1 m³: 1000000 dm³", () => {
      const res = convertVolume(1, VolumeUnits.m, VolumeUnits.cm);
      expect(res).toBeCloseTo(1_000_000, 3);
    });

    test("100 cm³: 0.1 dm³", () => {
      const res = convertVolume(100, VolumeUnits.cm, VolumeUnits.dm);
      expect(res).toBeCloseTo(0.1, 3);
    });
  });

  describe("SI => imperial derivatives", () => {
    test("1 m³: 1.307 inch³", () => {
      const res = convertVolume(1, VolumeUnits.m, VolumeUnits.yard);
      expect(res).toBeCloseTo(1.3079, 3);
    });

    test("100 cm³: 6.102 inch³", () => {
      const res = convertVolume(100, VolumeUnits.cm, VolumeUnits.inch);
      expect(res).toBeCloseTo(6.1023, 3);
    });
  });

  describe("SI => US", () => {
    test("1 m³: 264.172 US gallon", () => {
      const res = convertVolume(1, VolumeUnits.m, VolumeUnits.us_gallon);
      expect(res).toBeCloseTo(264.1721, 3);
    });

    test("100 cm³: 3.381 US ounce", () => {
      const res = convertVolume(100, VolumeUnits.cm, VolumeUnits.us_oz);
      expect(res).toBeCloseTo(3.3814, 3);
    });
  });

  describe("SI => Imperial", () => {
    test("1 m³: 219.969 Imperial gallon", () => {
      const res = convertVolume(1, VolumeUnits.m, VolumeUnits.imperial_gallon);
      expect(res).toBeCloseTo(219.9692, 3);
    });

    test("100 cm³: 3.519 Imperial ounce", () => {
      const res = convertVolume(100, VolumeUnits.cm, VolumeUnits.imperial_oz);
      expect(res).toBeCloseTo(3.5195, 3);
    });
  });

  describe("US => SI", () => {
    test("1 US gallon: 3.785 dm³", () => {
      const res = convertVolume(1, VolumeUnits.us_gallon, VolumeUnits.dm);
      expect(res).toBeCloseTo(3.7854, 3);
    });

    test("1 US ounce: 29.573 cm³", () => {
      const res = convertVolume(1, VolumeUnits.us_oz, VolumeUnits.cm);
      expect(res).toBeCloseTo(29.5735, 3);
    });
  });

  describe("Imperial => SI", () => {
    test("1 Imperial gallon: 4.546 dm³", () => {
      const res = convertVolume(1, VolumeUnits.imperial_gallon, VolumeUnits.dm);
      expect(res).toBeCloseTo(4.546, 3);
    });

    test("1 Imperial ounce: 28.413 dm³", () => {
      const res = convertVolume(1, VolumeUnits.imperial_oz, VolumeUnits.cm);
      expect(res).toBeCloseTo(28.413, 3);
    });
  });
});
