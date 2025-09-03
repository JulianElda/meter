export function arabicToRoman(num: number): string {
  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (const [value, numeral] of romanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

export function romanToArabic(roman: string): number {
  const romanMap: Record<string, number> = {
    C: 100,
    D: 500,
    I: 1,
    L: 50,
    M: 1000,
    V: 5,
    X: 10,
  };

  let total = 0;
  let prev = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const current = romanMap[roman[i]];
    // subtractive case (e.g., IV = 4, IX = 9)
    if (current < prev) {
      total -= current;
    } else {
      total += current;
    }
    prev = current;
  }

  return total;
}
