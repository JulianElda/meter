import { hexToRgb, rgbToHex, rgbToHSL, hslToRgb } from "@/src/util/conversion";

type ColorState = {
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
  HEX,
  RGB,
  HSL,
}

type ColorStoreActionType = {
  type: ColorStoreActions;
  payload: string;
};

function setHexHandler(payload: string): ColorState {
  return {
    hex: payload,
    rgb: hexToRgb(payload),
    hsl: rgbToHSL(hexToRgb(payload)),
  };
}

function setRgbHandler(payload: string): ColorState {
  return {
    hex: rgbToHex(payload),
    rgb: payload,
    hsl: rgbToHSL(payload),
  };
}

function setHslHandler(payload: string): ColorState {
  return {
    hex: rgbToHex(hslToRgb(payload)),
    rgb: hslToRgb(payload),
    hsl: payload,
  };
}

export function colorReducer(state: ColorState, action: ColorStoreActionType) {
  switch (action.type) {
    case ColorStoreActions.HEX:
      return setHexHandler(action.payload);
    case ColorStoreActions.RGB:
      return setRgbHandler(action.payload);
    case ColorStoreActions.HSL:
      return setHslHandler(action.payload);
    default:
      return state;
  }
}
