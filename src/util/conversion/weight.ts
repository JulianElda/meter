import type { WeightUnits } from "@/src/constants/weight";

import {
  POUND_TO_KG,
  WeightConversionTable,
  WeightSystems,
  WeightUnitsSystemsBase,
} from "@/src/constants/weight";

export const convertWeightToSameUnits = function (
  amount: number,
  unitsFrom: WeightUnits,
  unitsTo: WeightUnits
): number {
  // convert to base units first
  return (
    (amount * WeightConversionTable[unitsFrom].factor) /
    // now convert to its target unit
    WeightConversionTable[unitsTo].factor
  );
};

export const convertWeightToDifferentUnits = function (
  amount: number,
  unitsFrom: WeightUnits,
  unitsTo: WeightUnits
): number {
  let result = 0;

  // convert to base units first
  const baseFrom: number = convertWeightToSameUnits(
    amount,
    unitsFrom,
    WeightUnitsSystemsBase[WeightConversionTable[unitsFrom].system]
  );

  // imperial -> metric
  if (WeightConversionTable[unitsFrom].system === WeightSystems.IMPERIAL) {
    result = baseFrom * POUND_TO_KG;
  }
  // metric -> imperial
  else if (WeightConversionTable[unitsFrom].system === WeightSystems.METRIC) {
    result = baseFrom / POUND_TO_KG;
  }

  return result / WeightConversionTable[unitsTo].factor;
};

export const convertWeight = function (
  amount: number,
  unitsFrom: WeightUnits,
  unitsTo: WeightUnits
): number {
  // convert to same units
  if (unitsFrom === unitsTo) {
    return amount;
  }
  // convert to same base
  else if (
    WeightConversionTable[unitsFrom].system ===
    WeightConversionTable[unitsTo].system
  ) {
    return convertWeightToSameUnits(amount, unitsFrom, unitsTo);
  }
  // convert to different base
  else {
    return convertWeightToDifferentUnits(amount, unitsFrom, unitsTo);
  }
};
