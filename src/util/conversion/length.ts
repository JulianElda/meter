import type { LengthUnits } from "@/src/constants/length";

import {
  INCH_TO_CM,
  LengthConversionTable,
  LengthSystems,
  LengthUnitsSystemsBase,
} from "@/src/constants/length";

export const convertLengthToSameUnits = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): number {
  // convert to base units first
  return (
    (amount * LengthConversionTable[unitsFrom].factor) /
    // now convert to its target unit
    LengthConversionTable[unitsTo].factor
  );
};

export const convertLengthToDifferentUnits = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): number {
  let result = 0;

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
  return result / LengthConversionTable[unitsTo].factor;
};

export const convertLength = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): number {
  return LengthConversionTable[unitsFrom].system ===
    LengthConversionTable[unitsTo].system
    ? // convert to same base
      convertLengthToSameUnits(amount, unitsFrom, unitsTo)
    : // convert to different base
      convertLengthToDifferentUnits(amount, unitsFrom, unitsTo);
};
