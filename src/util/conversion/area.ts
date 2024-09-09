import { AreaUnits, AreaUnitsTable } from "@/src/constants/area";
import { convertLength } from "@/src/util/conversion";

/**
 * derivatives of length units are standard units, e.g. m², mile²
 * while others are derivatives of area units, e.g. Hectare and Acre
 */
const isStandardAreaUnits = function (areaUnits: AreaUnits) {
  return AreaUnitsTable[areaUnits].areaUnits === areaUnits;
};

/**
 * return squared conversion multiplier between two units
 */
const convertAreaSI = function (
  amount: number,
  unitsFrom: AreaUnits,
  unitsTo: AreaUnits
) {
  return (
    Math.pow(
      convertLength(
        1,
        AreaUnitsTable[unitsFrom].lengthUnits,
        AreaUnitsTable[unitsTo].lengthUnits
      ),
      2
    ) * amount
  );
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
    return convertAreaSI(amount, unitsFrom, unitsTo);
  }
  // standard to non-standard
  else if (isStandardAreaUnits(unitsFrom) && !isStandardAreaUnits(unitsTo)) {
    return (
      convertAreaSI(amount, unitsFrom, AreaUnitsTable[unitsTo].areaUnits) /
      AreaUnitsTable[unitsTo].factor
    );
  }
  // non-SI to SI
  else if (!isStandardAreaUnits(unitsFrom) && isStandardAreaUnits(unitsTo)) {
    return (
      convertAreaSI(amount, AreaUnitsTable[unitsFrom].areaUnits, unitsTo) *
      AreaUnitsTable[unitsFrom].factor
    );
  }
  // non-SI to non-SI
  else if (!isStandardAreaUnits(unitsFrom) && !isStandardAreaUnits(unitsTo)) {
    return (
      convertAreaSI(amount, AreaUnitsTable[unitsFrom].areaUnits, unitsTo) *
      (AreaUnitsTable[unitsFrom].factor / AreaUnitsTable[unitsTo].factor)
    );
  }

  // fallback
  else return amount;
};
