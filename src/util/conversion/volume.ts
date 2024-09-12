import { LengthUnits } from "@/src/constants/length";
import { VolumeUnits, VolumeUnitsTable } from "@/src/constants/volume";
import { convertLength } from "@/src/util/conversion";

/**
 * derivatives of length units are standard units, e.g. m³, mile³
 * while others are derivatives of area units, e.g. US gallon and US quart
 *
 * standard units have a factor of 1
 */
const isStandardVolumeUnits = function (volumeUnits: VolumeUnits) {
  return VolumeUnitsTable[volumeUnits].factor === 1;
};

/**
 * return cubed length conversion multiplier between two units
 */
const convertVolumeSI = function (
  amount: number,
  unitsFrom: LengthUnits,
  unitsTo: LengthUnits
) {
  return Math.pow(convertLength(1, unitsFrom, unitsTo), 3) * amount;
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
    return convertVolumeSI(
      amount,
      VolumeUnitsTable[unitsFrom].lengthUnits,
      VolumeUnitsTable[unitsTo].lengthUnits
    );
  }
  // standard to non-standard
  else if (
    isStandardVolumeUnits(unitsFrom) &&
    !isStandardVolumeUnits(unitsTo)
  ) {
    return (
      convertVolumeSI(
        amount,
        VolumeUnitsTable[unitsFrom].lengthUnits,
        VolumeUnitsTable[unitsTo].lengthUnits
      ) / VolumeUnitsTable[unitsTo].factor
    );
  }
  // non-SI to SI
  else if (
    !isStandardVolumeUnits(unitsFrom) &&
    isStandardVolumeUnits(unitsTo)
  ) {
    return (
      convertVolumeSI(
        amount,
        VolumeUnitsTable[unitsFrom].lengthUnits,
        VolumeUnitsTable[unitsTo].lengthUnits
      ) * VolumeUnitsTable[unitsFrom].factor
    );
  }
  // non-SI to non-SI
  else if (
    !isStandardVolumeUnits(unitsFrom) &&
    !isStandardVolumeUnits(unitsTo)
  ) {
    return (
      convertVolumeSI(
        amount,
        VolumeUnitsTable[unitsFrom].lengthUnits,
        VolumeUnitsTable[unitsTo].lengthUnits
      ) *
      (VolumeUnitsTable[unitsFrom].factor / VolumeUnitsTable[unitsTo].factor)
    );
  }

  // fallback
  else return amount;
};
