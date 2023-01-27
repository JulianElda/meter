export enum LengthSystems {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum LengthUnits {
  km = "km",
  m = "m",
  cm = "cm",
  inch = "inch",
  ft = "ft",
  mile = "mile",
  yard = "yard",
}

export const LengthUnitsSystemsBase: Record<LengthSystems, LengthUnits> = {
  [LengthSystems.IMPERIAL]: LengthUnits.inch,
  [LengthSystems.METRIC]: LengthUnits.cm,
};

export type LengthDescription = {
  // name of units
  unit: LengthUnits;

  // imperial or metric
  system: LengthSystems;

  // conversion to their respective "base"
  base: number;
};

// conversion table
export const LengthConversionTable: Record<string, LengthDescription> = {
  km: {
    unit: LengthUnits.km,
    system: LengthSystems.METRIC,
    // 1 km - 1000 m === 10000 cm
    base: 100000,
  },
  m: {
    unit: LengthUnits.m,
    system: LengthSystems.METRIC,
    // 1 m  - 100 cm
    base: 100,
  },
  cm: {
    unit: LengthUnits.cm,
    system: LengthSystems.METRIC,
    // 1 cm - 1 cm
    base: 1,
  },

  // bri'ish units
  inch: {
    unit: LengthUnits.inch,
    system: LengthSystems.IMPERIAL,
    // 1 inch - 1 inch
    base: 1,
  },
  ft: {
    unit: LengthUnits.ft,
    system: LengthSystems.IMPERIAL,
    // 1 ft - 12 inch
    base: 12,
  },
  yard: {
    unit: LengthUnits.yard,
    system: LengthSystems.IMPERIAL,
    // 1 yard - 36 inch === 3 ft
    base: 36,
  },
  mile: {
    unit: LengthUnits.mile,
    system: LengthSystems.IMPERIAL,
    // 1 mile - 63360 inch === 5280 ft === 1760 yard
    base: 63360,
  },
};

/*
  base conversion used for imperial - metric conversion
  use inch to cm since its exactly 2.54,
  cm to inch should be calculated (1 / 2.54)
  instead of storing its rounded value
*/
export const INCH_TO_CM: number = 2.54;
