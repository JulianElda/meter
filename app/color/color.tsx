"use client";

import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";
import { ChromePicker } from "react-color";

import { PageHeader } from "@/src/components/page-header/page-header";

import {
  colorReducer,
  ColorStoreActions,
  initialColorState,
} from "./color.store";

export function Color() {
  const [state, dispatch] = useReducer(colorReducer, initialColorState);

  const onChangeHex = (newHex: string) => {
    dispatch({
      payload: newHex.toUpperCase(),
      type: ColorStoreActions.HEX,
    });
  };

  const onChangeRgb = (newRgb: string) => {
    dispatch({
      payload: newRgb,
      type: ColorStoreActions.RGB,
    });
  };

  const onChangeHsl = (newHsl: string) => {
    dispatch({
      payload: newHsl,
      type: ColorStoreActions.HSL,
    });
  };

  return (
    <>
      <div>
        <PageHeader title="Color converter" />
      </div>
      <Card>
        <ChromePicker
          className="w-full!"
          color={state.hex}
          onChangeComplete={(value) => onChangeHex(value.hex)}
        />
        <div className="mt-2 space-y-2">
          <Input
            id="color-hex"
            label="Hex"
            onChange={onChangeHex as (value: number | string) => void}
            type="text"
            value={state.hex}
          />
          <Input
            id="color-rgb"
            label="RGB"
            onChange={onChangeRgb as (value: number | string) => void}
            type="text"
            value={state.rgb}
          />
          <Input
            id="color-hsl"
            label="HSL"
            onChange={onChangeHsl as (value: number | string) => void}
            type="text"
            value={state.hsl}
          />
        </div>
      </Card>
    </>
  );
}
