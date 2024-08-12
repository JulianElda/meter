import { TimeUnits } from "@/src/constants/time";
import { describe, expect, test } from "vitest";
import { convertTime } from "./time";

describe("Time conversion", () => {
  test("1 h: 1 h", () => {
    expect(convertTime(1, TimeUnits.h, TimeUnits.h)).toBe(1);
  });

  test("1 h: 60 m", () => {
    expect(convertTime(1, TimeUnits.h, TimeUnits.m)).toBe(60);
  });

  test("1 h: 3600 s", () => {
    expect(convertTime(1, TimeUnits.h, TimeUnits.s)).toBe(3600);
  });

  test("60 m: 1 h", () => {
    expect(convertTime(60, TimeUnits.m, TimeUnits.h)).toBe(1);
  });

  test("1 m: 1 m", () => {
    expect(convertTime(1, TimeUnits.m, TimeUnits.m)).toBe(1);
  });

  test("1 m: 60 s", () => {
    expect(convertTime(1, TimeUnits.m, TimeUnits.s)).toBe(60);
  });

  test("3600 s: 1 h", () => {
    expect(convertTime(3600, TimeUnits.s, TimeUnits.h)).toBe(1);
  });

  test("60 s: 1 m", () => {
    expect(convertTime(60, TimeUnits.s, TimeUnits.m)).toBe(1);
  });

  test("1 s: 1 s", () => {
    expect(convertTime(1, TimeUnits.s, TimeUnits.s)).toBe(1);
  });
});
