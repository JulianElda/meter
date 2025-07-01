import { LengthUnits } from "./length";
import { TimeUnits } from "./time";

export enum SpeedUnits {
  km_h = "km/h",
  m_s = "m/s",
  mile_h = "mile/h",
}

interface SpeedUnitsDescription {
  denumeratorUnits: TimeUnits;
  numeratorUnits: LengthUnits;
}

export const SpeedUnitsTable: Record<SpeedUnits, SpeedUnitsDescription> = {
  [SpeedUnits.km_h]: {
    denumeratorUnits: TimeUnits.h,
    numeratorUnits: LengthUnits.km,
  },
  [SpeedUnits.m_s]: {
    denumeratorUnits: TimeUnits.s,
    numeratorUnits: LengthUnits.m,
  },
  [SpeedUnits.mile_h]: {
    denumeratorUnits: TimeUnits.h,
    numeratorUnits: LengthUnits.mile,
  },
};
