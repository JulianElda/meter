import {
  INCH_TO_CM,
  LengthConversionTable,
  LengthSystems,
  LengthUnits,
  LengthUnitsSystemsBase,
} from "@/src/constants/length";

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
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
): number {
  let result: number = 0;

  // convert to same base
  if (
    LengthConversionTable[unitsFrom].system ===
    LengthConversionTable[unitsTo].system
  ) {
    result = convertLengthToSameUnits(amount, unitsFrom, unitsTo);
  }
  // convert to different base
  else {
    result = convertLengthToDifferentUnits(amount, unitsFrom, unitsTo);
  }

  return result;
};
