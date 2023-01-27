import { ROUNDING } from "constants/common";
import {
  INCH_TO_CM,
  LengthConversionTable,
  LengthSystems,
  LengthUnits,
  LengthUnitsSystemsBase,
} from "constants/length";
import { Temperatures, F_C, K_C } from "constants/temperature";

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
  let baseFrom: number = convertLengthToSameUnits(
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
  let parsedInput: number = parseInt(amount);

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
  let parsedInput: number = parseInt(amount);

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
export const calculateLuminance = function (r, g, b): number {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
export const calculateContrast = function (rgb1, rgb2): string {
  const lum1 = calculateLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = calculateLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return ((brightest + 0.05) / (darkest + 0.05)).toFixed(ROUNDING);
};
