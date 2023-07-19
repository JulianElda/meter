import { describe, test } from "vitest";
import { generatePassword } from "util/common";

describe("Password generator", () => {
  test("generate n-length password", async () => {
    const password = generatePassword(32, true, true, true);
    expect(password.length).toBe(32);
  });

  test.skip("generate password with uppercase", async () => {
    const password = generatePassword(32, true, true, true);
    expect(password.length).toBe(32);
  });
});
