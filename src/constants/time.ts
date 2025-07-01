export enum TimeUnits {
  // hour
  h = "h",

  // minute
  m = "m",

  // second
  s = "s",
}

export interface TimeDescription {
  base: number;
  unit: TimeUnits;
}

export const TimeConversionTable: Record<TimeUnits, TimeDescription> = {
  [TimeUnits.h]: {
    base: 3600,
    unit: TimeUnits.h,
  },
  [TimeUnits.m]: {
    base: 60,
    unit: TimeUnits.m,
  },
  [TimeUnits.s]: {
    base: 1,
    unit: TimeUnits.s,
  },
};
