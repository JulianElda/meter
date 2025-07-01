export enum LengthSystems {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum LengthUnits {
  cm = "cm",
  dm = "dm",
  ft = "ft",
  inch = "inch",
  km = "km",
  m = "m",
  mile = "mile",
  yard = "yard",
}

export const LengthUnitsSystemsBase: Record<LengthSystems, LengthUnits> = {
  [LengthSystems.IMPERIAL]: LengthUnits.inch,
  [LengthSystems.METRIC]: LengthUnits.cm,
};

export interface LengthDescription {
  // conversion to their respective base
  factor: number;

  // imperial or metric
  system: LengthSystems;
}

// conversion table
export const LengthConversionTable: Record<LengthUnits, LengthDescription> = {
  [LengthUnits.cm]: {
    // 1 cm - 1 cm
    factor: 1,
    system: LengthSystems.METRIC,
  },
  [LengthUnits.dm]: {
    // 1 dm  - 10 cm
    factor: 10,
    system: LengthSystems.METRIC,
  },
  [LengthUnits.ft]: {
    // 1 ft - 12 inch
    factor: 12,
    system: LengthSystems.IMPERIAL,
  },
  [LengthUnits.inch]: {
    // 1 inch - 1 inch
    factor: 1,
    system: LengthSystems.IMPERIAL,
  },
  [LengthUnits.km]: {
    // 1 km - 1000 m === 10000 cm
    factor: 100_000,
    system: LengthSystems.METRIC,
  },
  [LengthUnits.m]: {
    // 1 m  - 100 cm
    factor: 100,
    system: LengthSystems.METRIC,
  },
  [LengthUnits.mile]: {
    // 1 mile - 63360 inch === 5280 ft === 1760 yard
    factor: 63_360,
    system: LengthSystems.IMPERIAL,
  },
  [LengthUnits.yard]: {
    // 1 yard - 36 inch === 3 ft
    factor: 36,
    system: LengthSystems.IMPERIAL,
  },
};

/*
  base conversion used for imperial - metric conversion
  use inch to cm since its exactly 2.54,
  cm to inch should be calculated (1 / 2.54)
  instead of storing its rounded value
*/
export const INCH_TO_CM = 2.54;
