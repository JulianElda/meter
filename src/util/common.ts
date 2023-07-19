export const isValidNumber = function (value: string) {
  if (value === "") return false;
  else if (isNaN(Number(value))) return false;
  else return true;
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
  const SPECIAL_CHARS = "!$%&()[]{}=?+*#-_:;";

  let chars: string, result: string;
  chars = LOWERCASE_CHARS;
  result = "";

  if (uppercase) chars += UPPERCASE_CHARS;
  if (numerals) chars += NUMERAL_CHARS;
  if (special) chars += SPECIAL_CHARS;

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
