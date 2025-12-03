import { describe, expect, test } from "vitest";

import {
  generateGUID,
  generateRandomString,
  getRandomCharacter,
  shuffleCharacters,
} from "./string";

describe("shuffleCharacters", () => {
  test("shuffle characters in a string", () => {
    const input = "abcdef";
    const result = shuffleCharacters(input);
    expect(result).not.toBe(input);
    expect(result.length).toBe(input.length);
    expect(Array.from(result).sort().join("")).toBe(
      Array.from(input).sort().join("")
    );
  });
});

describe("getRandomCharacter", () => {
  test("return a character from the string", () => {
    const input = "abcdef";
    const result = getRandomCharacter(input);
    expect(input).toContain(result);
  });

  test("return undefined for an empty string", () => {
    const input = "";
    const result = getRandomCharacter(input);
    expect(result).toBe("");
  });
});

describe("generateRandomString", () => {
  test("generate a random string of default length 16", () => {
    const result = generateRandomString({});
    expect(result.length).toBe(16);
  });

  test("generate a random string of specified length", () => {
    const length = 10;
    const result = generateRandomString({ length });
    expect(result.length).toBe(length);
  });

  test("include uppercase characters if specified", () => {
    const result = generateRandomString({ uppercase: true });
    expect(result).toMatch(/[A-Z]/);
  });

  test("include numerals if specified", () => {
    const result = generateRandomString({ numerals: true });
    expect(result).toMatch(/[0-9]/);
  });

  test("include special characters if specified", () => {
    const result = generateRandomString({ special: true });
    expect(result).toMatch(/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
  });

  test("use provided characters if specified", () => {
    const chars = "xyz";
    const result = generateRandomString({ chars });
    expect(result).toMatch(/[xyz]/);
  });
});

describe("generate GUID", () => {
  test("generate a GUID in the correct format", () => {
    const guid = generateGUID();
    expect(guid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89a-f][0-9a-f]{3}-[0-9a-f]{12}$/
    );
  });

  test("generate a unique GUID each time", () => {
    const guid1 = generateGUID();
    const guid2 = generateGUID();
    expect(guid1).not.toBe(guid2);
  });

  test("generate a GUID with version 4", () => {
    const guid = generateGUID();
    // Ensure the third segment starts with a "4"
    expect(guid[14]).toBe("4");
  });

  test('generate a GUID with a valid "y" value', () => {
    const guid = generateGUID();
    // Ensure the 19th character is either 8, 9, a, or b (for version 4 GUIDs)
    const validYValues = ["8", "9", "a", "b"];
    expect(validYValues).toContain(guid[19]);
  });
});
