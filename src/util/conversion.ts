import { ROUNDING } from "src/constants/common";
import {
  INCH_TO_CM,
  LengthConversionTable,
  LengthSystems,
  LengthUnits,
  LengthUnitsSystemsBase,
} from "src/constants/length";
import { Temperatures, F_C, K_C } from "src/constants/temperature";

export function convertBaseNumber(
  n: string,
  sourceBase: number,
  targetBase: number
) {
  if (
    typeof sourceBase !== "number" ||
    typeof targetBase !== "number" ||
    sourceBase < 2 ||
    sourceBase > 36 ||
    targetBase < 2 ||
    targetBase > 36
  ) {
    return "0";
  }

  const decimalNumber = parseInt(n, sourceBase);
  if (isNaN(decimalNumber)) {
    return "0";
  }

  return decimalNumber.toString(targetBase);
}

const decimalToHex = function (fromRgb: string): string {
  let result = parseInt(fromRgb).toString(16);
  if (result.length === 1) result = "0" + result;
  return result;
};

export const hexToRgb = function (hexString: string): string {
  const toRgb = function (fromHex: string): string {
    return parseInt(fromHex, 16).toString();
  };

  let str = hexString;
  if (str.length === 7) str = str.slice(1, 7);

  return [
    toRgb(str.slice(0, 2)),
    toRgb(str.slice(2, 4)),
    toRgb(str.slice(4, 6)),
  ].join(", ");
};

export const rgbToHex = function (rgbString: string): string {
  const rgbArray = rgbString.split(",").map((value) => value.trim());

  return (
    "#" +
    [
      decimalToHex(rgbArray[0]),
      decimalToHex(rgbArray[1]),
      decimalToHex(rgbArray[2]),
    ]
      .join("")
      .toUpperCase()
  );
};

export function rgbToHSL(rgbString: string): string {
  const rgbArray = rgbString.split(",").map((value) => value.trim());

  const r = parseInt(rgbArray[0]) / 255;
  const g = parseInt(rgbArray[1]) / 255;
  const b = parseInt(rgbArray[2]) / 255;

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  let h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return h + ", " + s + "%, " + l + "%";
}

export function hslToRgb(hslString: string): string {
  const hslArray = hslString.split(",").map((value) => value.trim());

  const h = parseInt(hslArray[0]);
  const s = parseInt(hslArray[1].replace("%", "")) / 100;
  const l = parseInt(hslArray[2].replace("%", "")) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b].join(", ");
}

export const convertLengthToSameUnits = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): number {
  // convert to base units first
  return (
    (amount * LengthConversionTable[unitsFrom].base) /
    // now convert to its target unit
    LengthConversionTable[unitsTo].base
  );
};

export const convertLengthToDifferentUnits = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): number {
  let result: number = 0;

  // convert to base units first
  // e.g. km to cm
  const baseFrom: number = convertLengthToSameUnits(
    amount,
    unitsFrom,
    LengthUnitsSystemsBase[LengthConversionTable[unitsFrom].system]
  );

  // imperial -> metric
  // convert to cm: ( inch * 2.54 )
  if (LengthConversionTable[unitsFrom].system === LengthSystems.IMPERIAL) {
    result = baseFrom * INCH_TO_CM;
  }
  // metric -> imperial
  // convert to to inch: ( cm / 2.54 )
  else if (LengthConversionTable[unitsFrom].system === LengthSystems.METRIC) {
    result = baseFrom / INCH_TO_CM;
  }

  // now convert to its target units
  // e.g. inch to mile
  return result / LengthConversionTable[unitsTo].base;
};

export const convertLength = function (
  amount: string,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): string {
  // input from number field is string type
  const parsedInput: number = parseInt(amount);

  let result: number = 0;

  // convert to same base
  if (
    LengthConversionTable[unitsFrom].system ===
    LengthConversionTable[unitsTo].system
  ) {
    result = convertLengthToSameUnits(parsedInput, unitsFrom, unitsTo);
  }
  // convert to different base
  else {
    result = convertLengthToDifferentUnits(parsedInput, unitsFrom, unitsTo);
  }

  // set result value
  return result.toFixed(ROUNDING);
};

export const convertTemperature = function (
  amount: string,
  unitsFrom: Temperatures,
  unitsTo: Temperatures
) {
  const parsedInput: number = parseInt(amount);

  // Celcius is baseline
  let celciusAmount: number;
  switch (unitsFrom) {
    case Temperatures.C: {
      celciusAmount = parsedInput;
      break;
    }
    case Temperatures.F: {
      celciusAmount = (parsedInput - F_C) * (5 / 9);
      break;
    }
    case Temperatures.K: {
      celciusAmount = parsedInput - K_C;
      break;
    }
  }

  let result: number;
  switch (unitsTo) {
    case Temperatures.C: {
      result = celciusAmount;
      break;
    }
    case Temperatures.F: {
      result = celciusAmount * (9 / 5) + F_C;
      break;
    }
    case Temperatures.K: {
      result = celciusAmount + K_C;
      break;
    }
  }
  // set result value
  return result.toFixed(ROUNDING);
};

// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
export const calculateLuminance = function (
  r: number,
  g: number,
  b: number
): number {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
export const calculateContrast = function (
  rgb1: string[],
  rgb2: string[]
): string {
  const lum1 = calculateLuminance(
    parseInt(rgb1[0]),
    parseInt(rgb1[1]),
    parseInt(rgb1[2])
  );
  const lum2 = calculateLuminance(
    parseInt(rgb2[0]),
    parseInt(rgb2[1]),
    parseInt(rgb2[2])
  );
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return ((brightest + 0.05) / (darkest + 0.05)).toFixed(ROUNDING);
};
