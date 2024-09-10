import { ROUNDING } from "@/src/constants/common";

export const isValidNumber = function (value: string) {
  if (value === "") return false;
  else if (isNaN(Number(value))) return false;
  else return true;
};

export const shuffleCharacters = (characters: string) => {
  const charactersArray = characters.split("");
  let randomIndex: number;
  let currentIndex = characters.length;

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [charactersArray[currentIndex], charactersArray[randomIndex]] = [
      charactersArray[randomIndex],
      charactersArray[currentIndex],
    ];
  }

  return charactersArray.join("");
};

export const getRandomCharacter = (characters: string) => {
  return characters.charAt(Math.floor(Math.random() * characters.length));
};

export const generatePassword = function (
  length: number,
  uppercase: boolean,
  numerals: boolean,
  special: boolean
): string {
  const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMERAL_CHARS = "0123456789";
  const SPECIAL_CHARS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let chars: string, result: string;
  chars = LOWERCASE_CHARS;
  result = "";

  if (uppercase) {
    chars += UPPERCASE_CHARS;
    result += getRandomCharacter(UPPERCASE_CHARS);
  }
  if (numerals) {
    chars += NUMERAL_CHARS;
    result += getRandomCharacter(NUMERAL_CHARS);
  }
  if (special) {
    chars += SPECIAL_CHARS;
    result += getRandomCharacter(SPECIAL_CHARS);
  }

  while (result.length < length) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return shuffleCharacters(result);
};

export const toFixedRounding = function (amount: number): number {
  const rounder = Math.pow(10, ROUNDING);
  return Math.round(amount * rounder) / rounder;
};
