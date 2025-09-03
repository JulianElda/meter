import { describe, expect, test } from "vitest";

import { arabicToRoman, romanToArabic } from "./roman";

describe("arabicToRoman", () => {
  test("converts 1 to I", () => {
    expect(arabicToRoman(1)).toBe("I");
  });

  test("converts 4 to IV", () => {
    expect(arabicToRoman(4)).toBe("IV");
  });

  test("converts 9 to IX", () => {
    expect(arabicToRoman(9)).toBe("IX");
  });

  test("converts 58 to LVIII", () => {
    expect(arabicToRoman(58)).toBe("LVIII");
  });

  test("converts 1994 to MCMXCIV", () => {
    expect(arabicToRoman(1994)).toBe("MCMXCIV");
  });

  test("converts 3999 to MMMCMXCIX", () => {
    expect(arabicToRoman(3999)).toBe("MMMCMXCIX");
  });

  test("converts 0 to empty string", () => {
    expect(arabicToRoman(0)).toBe("");
  });

  test("converts 1000 to M", () => {
    expect(arabicToRoman(1000)).toBe("M");
  });

  test("converts 44 to XLIV", () => {
    expect(arabicToRoman(44)).toBe("XLIV");
  });

  test("converts 99 to XCIX", () => {
    expect(arabicToRoman(99)).toBe("XCIX");
  });

  test("converts 400 to CD", () => {
    expect(arabicToRoman(400)).toBe("CD");
  });

  test("converts 500 to D", () => {
    expect(arabicToRoman(500)).toBe("D");
  });

  test("converts 100 to C", () => {
    expect(arabicToRoman(100)).toBe("C");
  });
});

describe("romanToArabic", () => {
  test("converts I to 1", () => {
    expect(romanToArabic("I")).toBe(1);
  });

  test("converts IV to 4", () => {
    expect(romanToArabic("IV")).toBe(4);
  });

  test("converts IX to 9", () => {
    expect(romanToArabic("IX")).toBe(9);
  });

  test("converts LVIII to 58", () => {
    expect(romanToArabic("LVIII")).toBe(58);
  });

  test("converts MCMXCIV to 1994", () => {
    expect(romanToArabic("MCMXCIV")).toBe(1994);
  });

  test("converts MMMCMXCIX to 3999", () => {
    expect(romanToArabic("MMMCMXCIX")).toBe(3999);
  });

  test("converts empty string to 0", () => {
    expect(romanToArabic("")).toBe(0);
  });

  test("converts M to 1000", () => {
    expect(romanToArabic("M")).toBe(1000);
  });

  test("converts XLIV to 44", () => {
    expect(romanToArabic("XLIV")).toBe(44);
  });

  test("converts XCIX to 99", () => {
    expect(romanToArabic("XCIX")).toBe(99);
  });

  test("converts CD to 400", () => {
    expect(romanToArabic("CD")).toBe(400);
  });

  test("converts D to 500", () => {
    expect(romanToArabic("D")).toBe(500);
  });

  test("converts C to 100", () => {
    expect(romanToArabic("C")).toBe(100);
  });
});
