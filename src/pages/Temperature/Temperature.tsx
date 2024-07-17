import { Card, Input } from "@julianelda/scratchpad";
import { useState } from "react";
import { PageHeader } from "src/components/PageHeader";
import { Temperatures } from "src/constants/temperature";
import { toFixedRounding } from "src/util/common";
import { convertTemperature } from "src/util/conversion";

export function Temperature() {
  const [celcius, setCelcius] = useState<string>("100.00");
  const [fahrenheit, setFahrenheit] = useState<string>(
    toFixedRounding(
      convertTemperature(parseInt(celcius), Temperatures.C, Temperatures.F)
    )
  );
  const [kelvin, setKelvin] = useState<string>(
    toFixedRounding(
      convertTemperature(parseInt(celcius), Temperatures.C, Temperatures.K)
    )
  );

  const onChangeCelcius = function (value: string) {
    setCelcius(value);
    setFahrenheit(
      toFixedRounding(
        convertTemperature(parseInt(value), Temperatures.C, Temperatures.F)
      )
    );
    setKelvin(
      toFixedRounding(
        convertTemperature(parseInt(value), Temperatures.C, Temperatures.K)
      )
    );
  };

  const onChangeFahrenheit = function (value: string) {
    setCelcius(
      toFixedRounding(
        convertTemperature(parseInt(value), Temperatures.F, Temperatures.C)
      )
    );
    setFahrenheit(value);
    setKelvin(
      toFixedRounding(
        convertTemperature(parseInt(value), Temperatures.F, Temperatures.K)
      )
    );
  };

  const onChangeKelvin = function (value: string) {
    setCelcius(
      toFixedRounding(
        convertTemperature(parseInt(value), Temperatures.K, Temperatures.C)
      )
    );
    setFahrenheit(
      toFixedRounding(
        convertTemperature(parseInt(value), Temperatures.K, Temperatures.F)
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
            type="text"
            id="celcius-input"
            label="Celcius"
            value={celcius}
            onChange={(value) => onChangeCelcius(value)}
          />
        </div>
        <div className="my-2 flex">
          <Input
            type="text"
            id="fahrenheit-input"
            label="Fahrenheit"
            value={fahrenheit}
            onChange={(value) => onChangeFahrenheit(value)}
          />
        </div>
        <div className="my-2 flex">
          <Input
            type="text"
            id="kelvin-input"
            label="Kelvin"
            value={kelvin}
            onChange={(value) => onChangeKelvin(value)}
          />
        </div>
      </Card>
    </>
  );
}
