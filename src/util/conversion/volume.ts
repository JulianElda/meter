import { VolumeUnits, VolumeUnitsTable } from "@/src/constants/volume";
import { convertLength } from "@/src/util/conversion";

/**
 * derivatives of length units are standard units, e.g. m³, mile³
 * while others are derivatives of area units, e.g. US gallon and US quart
 */
const isStandardVolumeUnits = function (volumeUnits: VolumeUnits) {
  return VolumeUnitsTable[volumeUnits].volumeUnits === volumeUnits;
};

/**
 * return cubed conversion multiplier between two units
 */
const convertAreaSI = function (
  amount: number,
  unitsFrom: VolumeUnits,
  unitsTo: VolumeUnits
) {
  return (
    Math.pow(
      convertLength(
        1,
        VolumeUnitsTable[unitsFrom].lengthUnits,
        VolumeUnitsTable[unitsTo].lengthUnits
      ),
      3
    ) * amount
  );
};

export const convertVolume = function (
  amount: number,
  unitsFrom: VolumeUnits,
  unitsTo: VolumeUnits
): number {
  // same units, return amount
  if (unitsFrom === unitsTo) {
    return amount;
  }

  // both units are standard
  if (isStandardVolumeUnits(unitsFrom) && isStandardVolumeUnits(unitsTo)) {
    return convertAreaSI(amount, unitsFrom, unitsTo);
  }
  // standard to non-standard
  else if (
    isStandardVolumeUnits(unitsFrom) &&
    !isStandardVolumeUnits(unitsTo)
  ) {
    return (
      convertAreaSI(amount, unitsFrom, VolumeUnitsTable[unitsTo].volumeUnits) /
      VolumeUnitsTable[unitsTo].factor
    );
  }
  // non-SI to SI
  else if (
    !isStandardVolumeUnits(unitsFrom) &&
    isStandardVolumeUnits(unitsTo)
  ) {
    return (
      convertAreaSI(amount, VolumeUnitsTable[unitsFrom].volumeUnits, unitsTo) *
      VolumeUnitsTable[unitsFrom].factor
    );
  }
  // non-SI to non-SI
  else if (
    !isStandardVolumeUnits(unitsFrom) &&
    !isStandardVolumeUnits(unitsTo)
  ) {
    return (
      convertAreaSI(amount, VolumeUnitsTable[unitsFrom].volumeUnits, unitsTo) *
      (VolumeUnitsTable[unitsFrom].factor / VolumeUnitsTable[unitsTo].factor)
    );
  }

  // fallback
  else return amount;
};
