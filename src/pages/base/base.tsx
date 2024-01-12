import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";
import Header from "src/components/header/header";
import { BaseStoreActions, baseReducer, initialBaseState } from "./base.store";

export default function Base() {
  const [state, dispatch] = useReducer(baseReducer, initialBaseState);

  const onChangeBinary = (newBinary: string) => {
    dispatch({
      type: BaseStoreActions.BINARY,
      payload: {
        value: newBinary,
      },
    });
  };

  const onChangeDecimal = (newDecimal: string) => {
    dispatch({
      type: BaseStoreActions.DECIMAL,
      payload: {
        value: newDecimal,
      },
    });
  };

  const onChangeHex = (newHex: string) => {
    dispatch({
      type: BaseStoreActions.HEX,
      payload: {
        value: newHex,
      },
    });
  };

  return (
    <>
      <div>
        <Header title="Base converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <Input
            id="base-binary"
            type="text"
            label="Binary"
            value={state.binary}
            onChange={onChangeBinary}
          />
          <Input
            id="base-decimal"
            type="text"
            label="Decimal"
            value={state.decimal}
            onChange={onChangeDecimal}
          />
          <Input
            id="base-hex"
            type="text"
            label="Hex"
            value={state.hex}
            onChange={onChangeHex}
          />
        </div>
      </Card>
    </>
  );
}
