import { useState } from "react";

import Card from "components/card/card";
import Input from "components/form/input";
import Header from "components/header/header";

import { Temperatures } from "constants/temperature";
import { convertTemperature } from "util/conversion";

export default function Temperature() {
  const [celcius, setCelcius] = useState<string>("100.00");
  const [fahrenheit, setFahrenheit] = useState<string>(
    convertTemperature(celcius, Temperatures.C, Temperatures.F)
  );
  const [kelvin, setKelvin] = useState<string>(
    convertTemperature(celcius, Temperatures.C, Temperatures.K)
  );

  const onChangeCelcius = function (value: string) {
    setCelcius(value);
    setFahrenheit(convertTemperature(value, Temperatures.C, Temperatures.F));
    setKelvin(convertTemperature(value, Temperatures.C, Temperatures.K));
  };

  const onChangeFahrenheit = function (value: string) {
    setCelcius(convertTemperature(value, Temperatures.F, Temperatures.C));
    setFahrenheit(value);
    setKelvin(convertTemperature(value, Temperatures.F, Temperatures.K));
  };

  const onChangeKelvin = function (value: string) {
    setCelcius(convertTemperature(value, Temperatures.K, Temperatures.C));
    setFahrenheit(convertTemperature(value, Temperatures.K, Temperatures.F));
    setKelvin(value);
  };

  return (
    <>
      <div>
        <Header title="Temperature conversion" />
      </div>
      <Card>
        <div className="flex mb-2">
          <Input
            type="text"
            id="celcius-input"
            label="Celcius"
            value={celcius}
            onChange={(value) => onChangeCelcius(value)}
          />
        </div>
        <div className="flex my-2">
          <Input
            type="text"
            id="fahrenheit-input"
            label="Fahrenheit"
            value={fahrenheit}
            onChange={(value) => onChangeFahrenheit(value)}
          />
        </div>
        <div className="flex my-2">
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
