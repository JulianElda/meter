import { LengthUnits } from "./length";

export enum VolumeUnits {
  cm = "cm³",
  dm = "dm³",
  ft = "ft³",
  imperial_gallon = "Imperial gallon",
  imperial_oz = "Imperial fluid ounce",
  imperial_pint = "Imperial pint",
  imperial_quart = "Imperial quart",
  inch = "inch³",
  l = "liter",
  m = "m³",
  ml = "milliliter",
  us_cup = "US cup",
  us_gallon = "US gallon",
  us_oz = "US fluid ounce",
  us_pint = "US pint",
  us_quart = "US quart",
  yard = "yard³",
}

interface VolumeUnitsDescription {
  factor: number;
  lengthUnits: LengthUnits;
}

// US
// 1 gallon = 4 quart = 8 pint = 16 cup = 128 fluid ounce = 231 inch³
const US_GAL_INCH = 231;
const US_QUART_INCH = US_GAL_INCH / 4;
const US_PINT_INCH = US_GAL_INCH / 8;
const US_CUP_INCH = US_GAL_INCH / 16;
const US_OZ_INCH = US_GAL_INCH / 128;

// Imperial
// 1 gallon = 4 quart = 8 pint = 160 ounce = 4546.09 ml
const IMPERIAL_GAL_ML = 4546.09;
const IMPERIAL_QUART_ML = IMPERIAL_GAL_ML / 4;
const IMPERIAL_PINT_ML = IMPERIAL_GAL_ML / 8;
const IMPERIAL_OZ_ML = IMPERIAL_GAL_ML / 160;

export const VolumeUnitsTable: Record<VolumeUnits, VolumeUnitsDescription> = {
  [VolumeUnits.cm]: {
    factor: 1,
    lengthUnits: LengthUnits.cm,
  },
  [VolumeUnits.dm]: {
    factor: 1,
    lengthUnits: LengthUnits.dm,
  },
  [VolumeUnits.ft]: {
    factor: 1,
    lengthUnits: LengthUnits.ft,
  },
  [VolumeUnits.imperial_gallon]: {
    factor: IMPERIAL_GAL_ML,
    lengthUnits: LengthUnits.cm,
  },
  [VolumeUnits.imperial_oz]: {
    factor: IMPERIAL_OZ_ML,
    lengthUnits: LengthUnits.cm,
  },
  [VolumeUnits.imperial_pint]: {
    factor: IMPERIAL_PINT_ML,
    lengthUnits: LengthUnits.cm,
  },
  [VolumeUnits.imperial_quart]: {
    factor: IMPERIAL_QUART_ML,
    lengthUnits: LengthUnits.cm,
  },
  [VolumeUnits.inch]: {
    factor: 1,
    lengthUnits: LengthUnits.inch,
  },
  [VolumeUnits.l]: {
    factor: 1,
    lengthUnits: LengthUnits.dm,
  },
  [VolumeUnits.m]: {
    factor: 1,
    lengthUnits: LengthUnits.m,
  },
  [VolumeUnits.ml]: {
    factor: 1,
    lengthUnits: LengthUnits.cm,
  },
  [VolumeUnits.us_cup]: {
    factor: US_CUP_INCH,
    lengthUnits: LengthUnits.inch,
  },
  [VolumeUnits.us_gallon]: {
    factor: US_GAL_INCH,
    lengthUnits: LengthUnits.inch,
  },
  [VolumeUnits.us_oz]: {
    factor: US_OZ_INCH,
    lengthUnits: LengthUnits.inch,
  },
  [VolumeUnits.us_pint]: {
    factor: US_PINT_INCH,
    lengthUnits: LengthUnits.inch,
  },
  [VolumeUnits.us_quart]: {
    factor: US_QUART_INCH,
    lengthUnits: LengthUnits.inch,
  },
  [VolumeUnits.yard]: {
    factor: 1,
    lengthUnits: LengthUnits.yard,
  },
};
