import { generateRandomString } from "@/src/util/string";
import { describe, expect, test } from "vitest";

describe("Password generator", () => {
  test("generate n-length password", async () => {
    const password = generateRandomString({
      length: 32,
      numerals: true,
      special: true,
      uppercase: true,
    });
    expect(password.length).toBe(32);
  });
});
