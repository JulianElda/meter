import { SpeedUnits } from "src/constants/speed";
import { convertSpeed } from "./speed";

describe("Speed conversion", () => {
  test("100 km/h: 100 km/h", () => {
    const res = convertSpeed(100, SpeedUnits.km_h, SpeedUnits.km_h);
    expect(res).toBe(100);
  });

  test("100 km/h: 27 m/s", () => {
    const res = convertSpeed(100, SpeedUnits.km_h, SpeedUnits.m_s);
    expect(res).toBeCloseTo(27.7777, 3);
  });

  test("100 km/h: 62 miles/h", () => {
    const res = convertSpeed(100, SpeedUnits.km_h, SpeedUnits.mile_h);
    expect(res).toBeCloseTo(62.1371, 3);
  });

  test("100 m/s: 360 km/h", () => {
    const res = convertSpeed(100, SpeedUnits.m_s, SpeedUnits.km_h);
    expect(res).toBe(360);
  });

  test("100 m/s: 100 m/s", () => {
    const res = convertSpeed(100, SpeedUnits.m_s, SpeedUnits.m_s);
    expect(res).toBe(100);
  });

  test("100 m/s: 223 miles/h", () => {
    const res = convertSpeed(100, SpeedUnits.m_s, SpeedUnits.mile_h);
    expect(res).toBeCloseTo(223.6936, 3);
  });

  test("100 miles/h: 160 km/h", () => {
    const res = convertSpeed(100, SpeedUnits.mile_h, SpeedUnits.km_h);
    expect(res).toBeCloseTo(160.9344, 3);
  });

  test("100 miles/h: 160 m/s", () => {
    const res = convertSpeed(100, SpeedUnits.mile_h, SpeedUnits.m_s);
    expect(res).toBeCloseTo(44.704, 3);
  });

  test("100 miles/h: 100 miles/h", () => {
    const res = convertSpeed(100, SpeedUnits.mile_h, SpeedUnits.mile_h);
    expect(res).toBe(100);
  });
});
