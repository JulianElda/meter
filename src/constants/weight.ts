export enum WeightSystems {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum WeightUnits {
  g = "g",
  kg = "kg",
  pound = "pound",
  stone = "stone",
  tonne = "t",
}

export const WeightUnitsSystemsBase: Record<WeightSystems, WeightUnits> = {
  [WeightSystems.IMPERIAL]: WeightUnits.pound,
  [WeightSystems.METRIC]: WeightUnits.kg,
};

interface WeightDescription {
  // conversion to their respective base
  factor: number;

  // imperial or metric
  system: WeightSystems;
}

export const POUND_TO_KG = 0.453_592_37;

export const WeightConversionTable: Record<WeightUnits, WeightDescription> = {
  [WeightUnits.g]: {
    factor: 0.001,
    system: WeightSystems.METRIC,
  },
  [WeightUnits.kg]: {
    factor: 1,
    system: WeightSystems.METRIC,
  },
  [WeightUnits.pound]: {
    factor: 1,
    system: WeightSystems.IMPERIAL,
  },
  [WeightUnits.stone]: {
    // 1 stone = 14 pound
    factor: 14,
    system: WeightSystems.IMPERIAL,
  },
  [WeightUnits.tonne]: {
    factor: 1000,
    system: WeightSystems.METRIC,
  },
};
