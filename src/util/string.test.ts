import { describe, expect, test } from "vitest";
import {
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
    expect(result.split("").sort().join("")).toBe(
      input.split("").sort().join("")
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
