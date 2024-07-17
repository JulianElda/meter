import { LengthUnits } from "./length";
import { TimeUnits } from "./time";

export enum SpeedUnits {
  km_h = "km/h",
  m_s = "m/s",
  mile_h = "mile/h",
}

type SpeedUnitsDescription = {
  numeratorUnits: LengthUnits;
  denumeratorUnits: TimeUnits;
};

export const SpeedUnitsTable: Record<SpeedUnits, SpeedUnitsDescription> = {
  [SpeedUnits.km_h]: {
    numeratorUnits: LengthUnits.km,
    denumeratorUnits: TimeUnits.h,
  },
  [SpeedUnits.m_s]: {
    numeratorUnits: LengthUnits.m,
    denumeratorUnits: TimeUnits.s,
  },
  [SpeedUnits.mile_h]: {
    numeratorUnits: LengthUnits.mile,
    denumeratorUnits: TimeUnits.h,
  },
};
