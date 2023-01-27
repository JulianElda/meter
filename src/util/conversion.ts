import { ROUNDING } from "consts";
import {
  INCH_TO_CM,
  LengthConversionTable,
  LengthSystems,
  LengthUnits,
  LengthUnitsSystemsBase,
} from "constants/length";

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

export const convertLength = function (amount, unitsFrom, unitsTo): string {
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
