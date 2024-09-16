export enum WeightSystems {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum WeightUnits {
  tonne = "t",
  kg = "kg",
  g = "g",
  pound = "pound",
  stone = "stone",
}

export const WeightUnitsSystemsBase: Record<WeightSystems, WeightUnits> = {
  [WeightSystems.IMPERIAL]: WeightUnits.pound,
  [WeightSystems.METRIC]: WeightUnits.kg,
};

type WeightDescription = {
  // imperial or metric
  system: WeightSystems;

  // conversion to their respective base
  factor: number;
};

export const POUND_TO_KG = 0.45359237;

export const WeightConversionTable: Record<WeightUnits, WeightDescription> = {
  [WeightUnits.tonne]: {
    system: WeightSystems.METRIC,
    factor: 1000,
  },
  [WeightUnits.kg]: {
    system: WeightSystems.METRIC,
    factor: 1,
  },
  [WeightUnits.g]: {
    system: WeightSystems.METRIC,
    factor: 0.001,
  },
  [WeightUnits.pound]: {
    system: WeightSystems.IMPERIAL,
    factor: 1,
  },
  [WeightUnits.stone]: {
    system: WeightSystems.IMPERIAL,
    // 1 stone = 14 pound
    factor: 14,
  },
};
