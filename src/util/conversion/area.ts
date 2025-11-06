import type { AreaUnits } from "@/src/constants/area";
import type { LengthUnits } from "@/src/constants/length";

import { AreaUnitsTable } from "@/src/constants/area";
import { convertLength } from "@/src/util/conversion";
/**
 * derivatives of length units are standard units, e.g. m², mile²
 * while others are derivatives of area units, e.g. Hectare and Acre
 *
 * standard units have a factor of 1
 */
const isStandardAreaUnits = function (areaUnits: AreaUnits) {
  return AreaUnitsTable[areaUnits].factor === 1;
};

/**
 * return squared conversion multiplier between two units
 */
const convertAreaSI = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
) {
  return Math.pow(convertLength(1, unitsFrom, unitsTo), 2) * amount;
};

export const convertArea = function (
  amount: number,
  unitsFrom: AreaUnits,
  unitsTo: AreaUnits
): number {
  // same units, return amount
  if (unitsFrom === unitsTo) {
    return amount;
  }

  // both units are standard
  if (isStandardAreaUnits(unitsFrom) && isStandardAreaUnits(unitsTo)) {
    return convertAreaSI(
      amount,
      AreaUnitsTable[unitsFrom].lengthUnits,
      AreaUnitsTable[unitsTo].lengthUnits
    );
  }
  // standard to non-standard
  else if (isStandardAreaUnits(unitsFrom) && !isStandardAreaUnits(unitsTo)) {
    return (
      convertAreaSI(
        amount,
        AreaUnitsTable[unitsFrom].lengthUnits,
        AreaUnitsTable[unitsTo].lengthUnits
      ) / AreaUnitsTable[unitsTo].factor
    );
  }
  // non-SI to SI
  else if (!isStandardAreaUnits(unitsFrom) && isStandardAreaUnits(unitsTo)) {
    return (
      convertAreaSI(
        amount,
        AreaUnitsTable[unitsFrom].lengthUnits,
        AreaUnitsTable[unitsTo].lengthUnits
      ) * AreaUnitsTable[unitsFrom].factor
    );
  }
  // non-SI to non-SI
  else if (!isStandardAreaUnits(unitsFrom) && !isStandardAreaUnits(unitsTo)) {
    return (
      convertAreaSI(
        amount,
        AreaUnitsTable[unitsFrom].lengthUnits,
        AreaUnitsTable[unitsTo].lengthUnits
      ) *
      (AreaUnitsTable[unitsFrom].factor / AreaUnitsTable[unitsTo].factor)
    );
  }

  // fallback
  else {
    return amount;
  }
};
