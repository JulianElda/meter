"use client";

import { Card, Input } from "@julianelda/scratchpad";
import { useReducer } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";

import {
  initialTemperatureState,
  temperatureReducer,
  TemperatureStoreActions,
} from "./temperature.store";

export function Temperature() {
  const [state, dispatch] = useReducer(
    temperatureReducer,
    initialTemperatureState,
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
        <div className="flex flex-col gap-2">
          <Input
            id="celcius-input"
            label="Celcius"
            onChange={(value: number | string) =>
              onChangeCelcius(Number(value))
            }
            type="number"
            value={state.celcius}
          />
          <Input
            id="fahrenheit-input"
            label="Fahrenheit"
            onChange={(value: number | string) =>
              onChangeFahrenheit(Number(value))
            }
            type="number"
            value={state.fahrenheit}
          />
          <Input
            id="kelvin-input"
            label="Kelvin"
            onChange={(value: number | string) => onChangeKelvin(Number(value))}
            type="number"
            value={state.kelvin}
          />
        </div>
      </Card>
    </>
  );
}
