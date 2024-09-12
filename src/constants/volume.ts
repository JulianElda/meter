import { LengthUnits } from "./length";

export enum VolumeUnits {
  m = "m³",
  dm = "dm³",
  cm = "cm³",
  inch = "inch³",
  ft = "ft³",
  yard = "yard³",
  l = "liter",
  ml = "milliliter",
  us_gallon = "US gallon",
  us_quart = "US quart",
  us_pint = "US pint",
  us_cup = "US cup",
  us_oz = "US fluid ounce",
  imperial_gallon = "Imperial gallon",
  imperial_quart = "Imperial quart",
  imperial_pint = "Imperial pint",
  imperial_oz = "Imperial fluid ounce",
}

type VolumeUnitsDescription = {
  lengthUnits: LengthUnits;
  volumeUnits: VolumeUnits;
  factor: number;
};

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
  [VolumeUnits.m]: {
    lengthUnits: LengthUnits.m,
    volumeUnits: VolumeUnits.m,
    factor: 1,
  },
  [VolumeUnits.dm]: {
    lengthUnits: LengthUnits.dm,
    volumeUnits: VolumeUnits.dm,
    factor: 1,
  },
  [VolumeUnits.cm]: {
    lengthUnits: LengthUnits.cm,
    volumeUnits: VolumeUnits.cm,
    factor: 1,
  },
  [VolumeUnits.inch]: {
    lengthUnits: LengthUnits.inch,
    volumeUnits: VolumeUnits.inch,
    factor: 1,
  },
  [VolumeUnits.ft]: {
    lengthUnits: LengthUnits.ft,
    volumeUnits: VolumeUnits.ft,
    factor: 1,
  },
  [VolumeUnits.yard]: {
    lengthUnits: LengthUnits.yard,
    volumeUnits: VolumeUnits.yard,
    factor: 1,
  },
  [VolumeUnits.l]: {
    lengthUnits: LengthUnits.dm,
    volumeUnits: VolumeUnits.dm,
    factor: 1,
  },
  [VolumeUnits.ml]: {
    lengthUnits: LengthUnits.cm,
    volumeUnits: VolumeUnits.cm,
    factor: 1,
  },
  [VolumeUnits.us_gallon]: {
    lengthUnits: LengthUnits.inch,
    volumeUnits: VolumeUnits.inch,
    factor: US_GAL_INCH,
  },
  [VolumeUnits.us_quart]: {
    lengthUnits: LengthUnits.inch,
    volumeUnits: VolumeUnits.inch,
    factor: US_QUART_INCH,
  },
  [VolumeUnits.us_pint]: {
    lengthUnits: LengthUnits.inch,
    volumeUnits: VolumeUnits.inch,
    factor: US_PINT_INCH,
  },
  [VolumeUnits.us_cup]: {
    lengthUnits: LengthUnits.inch,
    volumeUnits: VolumeUnits.inch,
    factor: US_CUP_INCH,
  },
  [VolumeUnits.us_oz]: {
    lengthUnits: LengthUnits.inch,
    volumeUnits: VolumeUnits.inch,
    factor: US_OZ_INCH,
  },
  [VolumeUnits.imperial_gallon]: {
    lengthUnits: LengthUnits.cm,
    volumeUnits: VolumeUnits.ml,
    factor: IMPERIAL_GAL_ML,
  },
  [VolumeUnits.imperial_quart]: {
    lengthUnits: LengthUnits.cm,
    volumeUnits: VolumeUnits.ml,
    factor: IMPERIAL_QUART_ML,
  },
  [VolumeUnits.imperial_pint]: {
    lengthUnits: LengthUnits.cm,
    volumeUnits: VolumeUnits.ml,
    factor: IMPERIAL_PINT_ML,
  },
  [VolumeUnits.imperial_oz]: {
    lengthUnits: LengthUnits.cm,
    volumeUnits: VolumeUnits.ml,
    factor: IMPERIAL_OZ_ML,
  },
};
