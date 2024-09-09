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

export type AreaUnitsDescription = {
  lengthUnits: LengthUnits;
  areaUnits: AreaUnits;
  factor: number;
};

// 1 Hectare = 10000 m²
const HECTARE_M = 10000;

// 1 Acre = 4840 yd
const ACRE_YD = 4840;

export const AreaUnitsTable: Record<AreaUnits, AreaUnitsDescription> = {
  [AreaUnits.km]: {
    lengthUnits: LengthUnits.km,
    areaUnits: AreaUnits.km,
    factor: 1,
  },
  [AreaUnits.m]: {
    lengthUnits: LengthUnits.m,
    areaUnits: AreaUnits.m,
    factor: 1,
  },
  [AreaUnits.cm]: {
    lengthUnits: LengthUnits.cm,
    areaUnits: AreaUnits.cm,
    factor: 1,
  },
  [AreaUnits.inch]: {
    lengthUnits: LengthUnits.inch,
    areaUnits: AreaUnits.inch,
    factor: 1,
  },
  [AreaUnits.ft]: {
    lengthUnits: LengthUnits.ft,
    areaUnits: AreaUnits.ft,
    factor: 1,
  },
  [AreaUnits.mile]: {
    lengthUnits: LengthUnits.mile,
    areaUnits: AreaUnits.mile,
    factor: 1,
  },
  [AreaUnits.yard]: {
    lengthUnits: LengthUnits.yard,
    areaUnits: AreaUnits.yard,
    factor: 1,
  },
  [AreaUnits.hectare]: {
    lengthUnits: LengthUnits.m,
    areaUnits: AreaUnits.m,
    factor: HECTARE_M,
  },
  [AreaUnits.acre]: {
    lengthUnits: LengthUnits.yard,
    areaUnits: AreaUnits.yard,
    factor: ACRE_YD,
  },
};
