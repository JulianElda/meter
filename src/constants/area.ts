import { LengthUnits } from "./length";

export enum AreaUnits {
  km = "km²",
  m = "m²",
  cm = "cm²",
  inch = "inch²",
  ft = "ft²",
  mile = "mile²",
  yard = "yard²",
  hectare = "Hectare",
  acre = "Acre",
}

type AreaUnitsDescription = {
  lengthUnits: LengthUnits;
  factor: number;
};

// 1 Hectare = 10000 m²
const HECTARE_M = 10000;

// 1 Acre = 4840 yd
const ACRE_YD = 4840;

export const AreaUnitsTable: Record<AreaUnits, AreaUnitsDescription> = {
  [AreaUnits.km]: {
    lengthUnits: LengthUnits.km,
    factor: 1,
  },
  [AreaUnits.m]: {
    lengthUnits: LengthUnits.m,
    factor: 1,
  },
  [AreaUnits.cm]: {
    lengthUnits: LengthUnits.cm,
    factor: 1,
  },
  [AreaUnits.inch]: {
    lengthUnits: LengthUnits.inch,
    factor: 1,
  },
  [AreaUnits.ft]: {
    lengthUnits: LengthUnits.ft,
    factor: 1,
  },
  [AreaUnits.mile]: {
    lengthUnits: LengthUnits.mile,
    factor: 1,
  },
  [AreaUnits.yard]: {
    lengthUnits: LengthUnits.yard,
    factor: 1,
  },
  [AreaUnits.hectare]: {
    lengthUnits: LengthUnits.m,
    factor: HECTARE_M,
  },
  [AreaUnits.acre]: {
    lengthUnits: LengthUnits.yard,
    factor: ACRE_YD,
  },
};
