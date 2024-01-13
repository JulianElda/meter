import { useReducer } from "react";
import { Card, Input } from "@julianelda/scratchpad";
import Header from "src/components/header/header";
import { ChromePicker } from "react-color";
import {
  ColorStoreActions,
  colorReducer,
  initialColorState,
} from "./color.store";

export default function Color() {
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
        <Header title="Color" />
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
