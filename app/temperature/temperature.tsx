"use client";

import { PageHeader } from "@/src/components/page-header";
import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";
import {
  initialTemperatureState,
  temperatureReducer,
  TemperatureStoreActions,
} from "./temperature.store";

export function Temperature() {
  const [state, dispatch] = useReducer(
    temperatureReducer,
    initialTemperatureState
  );

  const onChangeCelcius = function (value: number) {
    dispatch({
      type: TemperatureStoreActions.celcius,
      payload: value,
    });
  };

  const onChangeFahrenheit = function (value: number) {
    dispatch({
      type: TemperatureStoreActions.fahrenheit,
      payload: value,
    });
  };

  const onChangeKelvin = function (value: number) {
    dispatch({
      type: TemperatureStoreActions.kelvin,
      payload: value,
    });
  };

  return (
    <>
      <div>
        <PageHeader title="Temperature converter" />
      </div>
      <Card>
        <div className="mb-2 flex">
          <Input
            type="number"
            id="celcius-input"
            label="Celcius"
            value={state.celcius}
            onChange={onChangeCelcius as (value: string | number) => void}
          />
        </div>
        <div className="my-2 flex">
          <Input
            type="number"
            id="fahrenheit-input"
            label="Fahrenheit"
            value={state.fahrenheit}
            onChange={onChangeFahrenheit as (value: string | number) => void}
          />
        </div>
        <div className="my-2 flex">
          <Input
            type="number"
            id="kelvin-input"
            label="Kelvin"
            value={state.kelvin}
            onChange={onChangeKelvin as (value: string | number) => void}
          />
        </div>
      </Card>
    </>
  );
}
