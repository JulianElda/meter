export enum LengthSystems {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum LengthUnits {
  km = "km",
  m = "m",
  dm = "dm",
  cm = "cm",
  mile = "mile",
  yard = "yard",
  ft = "ft",
  inch = "inch",
}

export const LengthUnitsSystemsBase: Record<LengthSystems, LengthUnits> = {
  [LengthSystems.IMPERIAL]: LengthUnits.inch,
  [LengthSystems.METRIC]: LengthUnits.cm,
};

export type LengthDescription = {
  // imperial or metric
  system: LengthSystems;

  // conversion to their respective base
  factor: number;
};

// conversion table
export const LengthConversionTable: Record<LengthUnits, LengthDescription> = {
  [LengthUnits.km]: {
    system: LengthSystems.METRIC,
    // 1 km - 1000 m === 10000 cm
    factor: 100000,
  },
  [LengthUnits.m]: {
    system: LengthSystems.METRIC,
    // 1 m  - 100 cm
    factor: 100,
  },
  [LengthUnits.dm]: {
    system: LengthSystems.METRIC,
    // 1 dm  - 10 cm
    factor: 10,
  },
  [LengthUnits.cm]: {
    system: LengthSystems.METRIC,
    // 1 cm - 1 cm
    factor: 1,
  },
  [LengthUnits.mile]: {
    system: LengthSystems.IMPERIAL,
    // 1 mile - 63360 inch === 5280 ft === 1760 yard
    factor: 63360,
  },
  [LengthUnits.yard]: {
    system: LengthSystems.IMPERIAL,
    // 1 yard - 36 inch === 3 ft
    factor: 36,
  },
  [LengthUnits.ft]: {
    system: LengthSystems.IMPERIAL,
    // 1 ft - 12 inch
    factor: 12,
  },
  [LengthUnits.inch]: {
    system: LengthSystems.IMPERIAL,
    // 1 inch - 1 inch
    factor: 1,
  },
};

/*
  base conversion used for imperial - metric conversion
  use inch to cm since its exactly 2.54,
  cm to inch should be calculated (1 / 2.54)
  instead of storing its rounded value
*/
export const INCH_TO_CM: number = 2.54;
