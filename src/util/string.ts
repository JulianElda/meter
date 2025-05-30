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

export const generateRandomString = function ({
  length = 16,
  uppercase = false,
  numerals = false,
  special = false,
  chars = "",
}): string {
  const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMERAL_CHARS = "0123456789";
  const SPECIAL_CHARS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  let availableCharacters = chars ? chars : LOWERCASE_CHARS;
  let result = "";

  if (uppercase) {
    availableCharacters += UPPERCASE_CHARS;
    result += getRandomCharacter(UPPERCASE_CHARS);
  }
  if (numerals) {
    availableCharacters += NUMERAL_CHARS;
    result += getRandomCharacter(NUMERAL_CHARS);
  }
  if (special) {
    availableCharacters += SPECIAL_CHARS;
    result += getRandomCharacter(SPECIAL_CHARS);
  }

  while (result.length < length) {
    result += availableCharacters.charAt(
      Math.floor(Math.random() * availableCharacters.length)
    );
  }

  return shuffleCharacters(result);
};

export function generateGUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const r = (Math.random() * 16) | 0;
    const v = char === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
