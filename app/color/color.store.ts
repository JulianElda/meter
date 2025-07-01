import { hexToRgb, hslToRgb, rgbToHex, rgbToHSL } from "@/src/util/conversion";

interface ColorState {
  hex: string;
  hsl: string;
  rgb: string;
}

export const initialColorState = {
  hex: "#DC143C",
  hsl: "348, 83%, 47%",
  rgb: "64, 75, 10",
};

export enum ColorStoreActions {
  HEX,
  RGB,
  HSL,
}

interface ColorStoreActionType {
  payload: string;
  type: ColorStoreActions;
}

export function colorReducer(state: ColorState, action: ColorStoreActionType) {
  switch (action.type) {
    case ColorStoreActions.HEX: {
      return setHexHandler(action.payload);
    }
    case ColorStoreActions.HSL: {
      return setHslHandler(action.payload);
    }
    case ColorStoreActions.RGB: {
      return setRgbHandler(action.payload);
    }
    default: {
      return state;
    }
  }
}

function setHexHandler(payload: string): ColorState {
  return {
    hex: payload,
    hsl: rgbToHSL(hexToRgb(payload)),
    rgb: hexToRgb(payload),
  };
}

function setHslHandler(payload: string): ColorState {
  return {
    hex: rgbToHex(hslToRgb(payload)),
    hsl: payload,
    rgb: hslToRgb(payload),
  };
}

function setRgbHandler(payload: string): ColorState {
  return {
    hex: rgbToHex(payload),
    hsl: rgbToHSL(payload),
    rgb: payload,
  };
}
