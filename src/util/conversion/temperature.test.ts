import { describe, expect, test } from "vitest";
import { convertTemperature } from "./temperature";
import { Temperatures } from "@/src/constants/temperature";

describe("Temperature conversion", () => {
  test("100 C = 212 F = 373.15 K", () => {
    expect(convertTemperature(100, Temperatures.C, Temperatures.F)).toBe(212);
    expect(convertTemperature(100, Temperatures.C, Temperatures.K)).toBe(
      373.15
    );
  });

  test("37.778 C = 100 F = 310.928 K", () => {
    expect(convertTemperature(100, Temperatures.F, Temperatures.C)).toBeCloseTo(
      37.7778,
      3
    );
    expect(convertTemperature(100, Temperatures.F, Temperatures.K)).toBeCloseTo(
      310.9277,
      3
    );
  });

  test("-173.150 C = -279.670 F = 100 K", async () => {
    expect(convertTemperature(100, Temperatures.K, Temperatures.C)).toBeCloseTo(
      -173.15,
      3
    );
    expect(convertTemperature(100, Temperatures.K, Temperatures.F)).toBeCloseTo(
      -279.67,
      3
    );
  });
});
