"use client";

import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";

import { PageHeader } from "@/src/components/page-header";

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
      payload: value,
      type: TemperatureStoreActions.celcius,
    });
  };

  const onChangeFahrenheit = function (value: number) {
    dispatch({
      payload: value,
      type: TemperatureStoreActions.fahrenheit,
    });
  };

  const onChangeKelvin = function (value: number) {
    dispatch({
      payload: value,
      type: TemperatureStoreActions.kelvin,
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
            id="celcius-input"
            label="Celcius"
            onChange={onChangeCelcius as (value: number | string) => void}
            type="number"
            value={state.celcius}
          />
        </div>
        <div className="my-2 flex">
          <Input
            id="fahrenheit-input"
            label="Fahrenheit"
            onChange={onChangeFahrenheit as (value: number | string) => void}
            type="number"
            value={state.fahrenheit}
          />
        </div>
        <div className="my-2 flex">
          <Input
            id="kelvin-input"
            label="Kelvin"
            onChange={onChangeKelvin as (value: number | string) => void}
            type="number"
            value={state.kelvin}
          />
        </div>
      </Card>
    </>
  );
}
