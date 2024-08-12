import { hexToRgb, rgbToHex, rgbToHSL, hslToRgb } from "@/src/util/conversion";

export type ColorState = {
  hex: string;
  rgb: string;
  hsl: string;
};

export const initialColorState = {
  hex: "#DC143C",
  rgb: "64, 75, 10",
  hsl: "348, 83%, 47%",
};

export enum ColorStoreActions {
  HEX = "HEX",
  RGB = "RGB",
  HSL = "HSL",
}

type ColorValueChangePayload = {
  value: string;
};

type ColorStoreActionType = {
  type: ColorStoreActions;
  payload: ColorValueChangePayload;
};

function setHexHandler(
  state: ColorState,
  { value }: ColorValueChangePayload
): ColorState {
  return {
    ...state,
    hex: value,
    rgb: hexToRgb(value),
    hsl: rgbToHSL(hexToRgb(value)),
  };
}

function setRgbHandler(
  state: ColorState,
  { value }: ColorValueChangePayload
): ColorState {
  return {
    ...state,
    hex: rgbToHex(value),
    rgb: value,
    hsl: rgbToHSL(value),
  };
}

function setHslHandler(
  state: ColorState,
  { value }: ColorValueChangePayload
): ColorState {
  return {
    ...state,
    hex: rgbToHex(hslToRgb(value)),
    rgb: hslToRgb(value),
    hsl: value,
  };
}

export function colorReducer(state: ColorState, action: ColorStoreActionType) {
  switch (action.type) {
    case ColorStoreActions.HEX:
      return setHexHandler(state, action.payload);
    case ColorStoreActions.RGB:
      return setRgbHandler(state, action.payload);
    case ColorStoreActions.HSL:
      return setHslHandler(state, action.payload);
    default:
      return state;
  }
}
