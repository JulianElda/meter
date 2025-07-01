import type { SpeedUnits } from "@/src/constants/speed";

import { SpeedUnitsTable } from "@/src/constants/speed";
import { convertLength } from "@/src/util/conversion";

import { convertTime } from "./time";

export const convertSpeed = function (
  amount: number,
  unitsFrom: SpeedUnits,
  unitsTo: SpeedUnits
) {
  const convertedNumerator = convertLength(
    amount,
    SpeedUnitsTable[unitsFrom].numeratorUnits,
    SpeedUnitsTable[unitsTo].numeratorUnits
  );
  const denumerator = convertTime(
    1,
    SpeedUnitsTable[unitsFrom].denumeratorUnits,
    SpeedUnitsTable[unitsTo].denumeratorUnits
  );

  return convertedNumerator / denumerator;
};
