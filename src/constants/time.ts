export enum TimeUnits {
  // second
  s = "s",

  // minute
  m = "m",

  // hour
  h = "h",
}

export type TimeDescription = {
  unit: TimeUnits;
  base: number;
};

export const TimeConversionTable: Record<TimeUnits, TimeDescription> = {
  [TimeUnits.s]: {
    unit: TimeUnits.s,
    base: 1,
  },
  [TimeUnits.m]: {
    unit: TimeUnits.m,
    base: 60,
  },
  [TimeUnits.h]: {
    unit: TimeUnits.h,
    base: 3600,
  },
};
