import { LengthUnits } from "./length";

export enum AreaUnits {
  acre = "Acre",
  cm = "cm²",
  ft = "ft²",
  hectare = "Hectare",
  inch = "inch²",
  km = "km²",
  m = "m²",
  mile = "mile²",
  yard = "yard²",
}

interface AreaUnitsDescription {
  factor: number;
  lengthUnits: LengthUnits;
}

// 1 Hectare = 10000 m²
const HECTARE_M = 10_000;

// 1 Acre = 4840 yd
const ACRE_YD = 4840;

export const AreaUnitsTable: Record<AreaUnits, AreaUnitsDescription> = {
  [AreaUnits.acre]: {
    factor: ACRE_YD,
    lengthUnits: LengthUnits.yard,
  },
  [AreaUnits.cm]: {
    factor: 1,
    lengthUnits: LengthUnits.cm,
  },
  [AreaUnits.ft]: {
    factor: 1,
    lengthUnits: LengthUnits.ft,
  },
  [AreaUnits.hectare]: {
    factor: HECTARE_M,
    lengthUnits: LengthUnits.m,
  },
  [AreaUnits.inch]: {
    factor: 1,
    lengthUnits: LengthUnits.inch,
  },
  [AreaUnits.km]: {
    factor: 1,
    lengthUnits: LengthUnits.km,
  },
  [AreaUnits.m]: {
    factor: 1,
    lengthUnits: LengthUnits.m,
  },
  [AreaUnits.mile]: {
    factor: 1,
    lengthUnits: LengthUnits.mile,
  },
  [AreaUnits.yard]: {
    factor: 1,
    lengthUnits: LengthUnits.yard,
  },
};
