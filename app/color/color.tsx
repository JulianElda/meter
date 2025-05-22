"use client";

import { PageHeader } from "@/src/components/page-header";
import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";
import { ChromePicker } from "react-color";
import {
  ColorStoreActions,
  colorReducer,
  initialColorState,
} from "./color.store";

export function Color() {
  const [state, dispatch] = useReducer(colorReducer, initialColorState);

  const onChangeHex = (newHex: string) => {
    dispatch({
      type: ColorStoreActions.HEX,
      payload: newHex.toUpperCase(),
    });
  };

  const onChangeRgb = (newRgb: string) => {
    dispatch({
      type: ColorStoreActions.RGB,
      payload: newRgb,
    });
  };

  const onChangeHsl = (newHsl: string) => {
    dispatch({
      type: ColorStoreActions.HSL,
      payload: newHsl,
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
            type="text"
            label="Hex"
            value={state.hex}
            onChange={onChangeHex as (value: string | number) => void}
          />
          <Input
            id="color-rgb"
            type="text"
            label="RGB"
            value={state.rgb}
            onChange={onChangeRgb as (value: string | number) => void}
          />
          <Input
            id="color-hsl"
            type="text"
            label="HSL"
            value={state.hsl}
            onChange={onChangeHsl as (value: string | number) => void}
          />
        </div>
      </Card>
    </>
  );
}
