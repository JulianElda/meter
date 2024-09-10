import { PageHeader } from "@/src/components/PageHeader";
import { Temperatures } from "@/src/constants/temperature";
import { toFixedRoundingNumber } from "@/src/util/common";
import { convertTemperature } from "@/src/util/conversion";
import { Card, Input } from "@julianelda/scratchpad";
import { useState } from "react";

export function Temperature() {
  const [celcius, setCelcius] = useState<number>(100);
  const [fahrenheit, setFahrenheit] = useState<number>(
    toFixedRoundingNumber(
      convertTemperature(celcius, Temperatures.C, Temperatures.F)
    )
  );
  const [kelvin, setKelvin] = useState<number>(
    toFixedRoundingNumber(
      convertTemperature(celcius, Temperatures.C, Temperatures.K)
    )
  );

  const onChangeCelcius = function (value: number) {
    setCelcius(value);
    setFahrenheit(
      toFixedRoundingNumber(
        convertTemperature(value, Temperatures.C, Temperatures.F)
      )
    );
    setKelvin(
      toFixedRoundingNumber(
        convertTemperature(value, Temperatures.C, Temperatures.K)
      )
    );
  };

  const onChangeFahrenheit = function (value: number) {
    setCelcius(
      toFixedRoundingNumber(
        convertTemperature(value, Temperatures.F, Temperatures.C)
      )
    );
    setFahrenheit(value);
    setKelvin(
      toFixedRoundingNumber(
        convertTemperature(value, Temperatures.F, Temperatures.K)
      )
    );
  };

  const onChangeKelvin = function (value: number) {
    setCelcius(
      toFixedRoundingNumber(
        convertTemperature(value, Temperatures.K, Temperatures.C)
      )
    );
    setFahrenheit(
      toFixedRoundingNumber(
        convertTemperature(value, Temperatures.K, Temperatures.F)
      )
    );
    setKelvin(value);
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
            value={celcius}
            onChange={onChangeCelcius as (value: string | number) => void}
          />
        </div>
        <div className="my-2 flex">
          <Input
            type="number"
            id="fahrenheit-input"
            label="Fahrenheit"
            value={fahrenheit}
            onChange={onChangeFahrenheit as (value: string | number) => void}
          />
        </div>
        <div className="my-2 flex">
          <Input
            type="number"
            id="kelvin-input"
            label="Kelvin"
            value={kelvin}
            onChange={onChangeKelvin as (value: string | number) => void}
          />
        </div>
      </Card>
    </>
  );
}
