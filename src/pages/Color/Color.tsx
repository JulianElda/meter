import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";
import { ChromePicker } from "react-color";
import { PageHeader } from "src/components/PageHeader";
import {
  ColorStoreActions,
  colorReducer,
  initialColorState,
} from "./Color.store";

export function Color() {
  const [state, dispatch] = useReducer(colorReducer, initialColorState);

  const onChangeHex = (newHex: string) => {
    dispatch({
      type: ColorStoreActions.HEX,
      payload: {
        value: newHex.toUpperCase(),
      },
    });
  };

  const onChangeRgb = (newRgb: string) => {
    dispatch({
      type: ColorStoreActions.RGB,
      payload: {
        value: newRgb,
      },
    });
  };

  const onChangeHsl = (newHsl: string) => {
    dispatch({
      type: ColorStoreActions.HSL,
      payload: {
        value: newHsl,
      },
    });
  };

  return (
    <>
      <div>
        <PageHeader title="Color converter" />
      </div>
      <Card>
        <ChromePicker
          className="!w-full"
          color={state.hex}
          onChangeComplete={(value) => onChangeHex(value.hex)}
        />
        <div className="mt-2 space-y-2">
          <Input
            id="color-hex"
            type="text"
            label="Hex"
            value={state.hex}
            onChange={onChangeHex}
          />
          <Input
            id="color-rgb"
            type="text"
            label="RGB"
            value={state.rgb}
            onChange={onChangeRgb}
          />
          <Input
            id="color-hsl"
            type="text"
            label="HSL"
            value={state.hsl}
            onChange={onChangeHsl}
          />
        </div>
      </Card>
    </>
  );
}
