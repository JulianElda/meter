import type { TimeUnits } from "@/src/constants/time";

import { TimeConversionTable } from "@/src/constants/time";

export const convertTime = function (
  amount: number,
  unitsFrom: TimeUnits,
  unitsTo: TimeUnits
): number {
  return (
    (amount * TimeConversionTable[unitsFrom].base) /
    TimeConversionTable[unitsTo].base
  );
};
