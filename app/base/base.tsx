"use client";

import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";

import { baseReducer, BaseStoreActions, initialBaseState } from "./base.store";

export function Base() {
  const [state, dispatch] = useReducer(baseReducer, initialBaseState);

  const onChangeBinary = (newBinary: string) => {
    dispatch({
      payload: {
        value: newBinary,
      },
      type: BaseStoreActions.BINARY,
    });
  };

  const onChangeDecimal = (newDecimal: string) => {
    dispatch({
      payload: {
        value: newDecimal,
      },
      type: BaseStoreActions.DECIMAL,
    });
  };

  const onChangeHex = (newHex: string) => {
    dispatch({
      payload: {
        value: newHex,
      },
      type: BaseStoreActions.HEX,
    });
  };

  return (
    <>
      <div>
        <PageHeader title="Base converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <Input
            id="base-binary"
            label="Binary"
            onChange={onChangeBinary as (value: number | string) => void}
            type="text"
            value={state.binary}
          />
          <Input
            id="base-decimal"
            label="Decimal"
            onChange={onChangeDecimal as (value: number | string) => void}
            type="text"
            value={state.decimal}
          />
          <Input
            id="base-hex"
            label="Hex"
            onChange={onChangeHex as (value: number | string) => void}
            type="text"
            value={state.hex}
          />
        </div>
      </Card>
    </>
  );
}
