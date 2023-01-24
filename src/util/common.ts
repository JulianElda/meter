export const isValidNumber = function (value: string) {
  if (value === "") return false;
  else if (isNaN(Number(value))) return false;
  else return true;
};

const decimalToHex = function (fromRgb: string): string {
  let result = parseInt(fromRgb).toString(16);
  if (result.length === 1) result = "0" + result;
  return result;
};

export const hexToRgb = function (hexString: string): string[] {
  const toRgb = function (fromHex: string): string {
    return parseInt(fromHex, 16).toString();
  };

  return [
    toRgb(hexString.slice(0, 2)),
    toRgb(hexString.slice(2, 4)),
    toRgb(hexString.slice(4, 6)),
  ];
};

export const rgbToHex = function (rgbString: string[]): string {
  return [
    decimalToHex(rgbString[0]),
    decimalToHex(rgbString[1]),
    decimalToHex(rgbString[2]),
  ]
    .join("")
    .toUpperCase();
};
