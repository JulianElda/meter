import { useState } from "react";
import { isValidNumber } from "util/common";
import { SelectOption } from "components/form/select";
import InputSelect from "components/form/inputselect";
import { Temperatures } from "constants/temperature";
import { convertTemperature } from "util/conversion";

const DEFAULT_INPUT: string = "";

export default function Temperature() {
  const [units1, setUnits1] = useState<Temperatures>(Temperatures.F);
  const [units2, setUnits2] = useState<Temperatures>(Temperatures.C);

  const [amount1, setAmount1] = useState<string>("100");
  const [amount2, setAmount2] = useState<string>(
    convertTemperature(amount1, units1, units2)
  );

  const getOptions = function (): SelectOption[] {
    let tmp: SelectOption[] = [];
    for (const key in Temperatures)
      tmp.push({
        display: Temperatures[key],
        value: Temperatures[key],
      });
    return tmp;
  };

  const onChangeAmount1 = function (value: string) {
    if (value === "") setAmount1(DEFAULT_INPUT);
    if (!isValidNumber(value)) return;
    else setAmount1(value);
    setAmount2(convertTemperature(value, units1, units2));
  };

  const onChangeUnits1 = function (value: Temperatures) {
    setUnits1(value);
    setAmount2(convertTemperature(amount1, value, units2));
  };

  const onChangeUnits2 = function (value: Temperatures) {
    setUnits2(value);
    setAmount2(convertTemperature(amount1, units1, value));
  };

  return (
    <div>
      <div className="flex my-4">
        <InputSelect
          inputId="input-input"
          inputLabel="Input"
          inputValue={amount1}
          onInputChange={(value) => onChangeAmount1(value)}
          selectId="from-input"
          selectLabel="From"
          selectValue={units1}
          onSelectChange={(value) => onChangeUnits1(value as Temperatures)}
          options={getOptions()}
        />
      </div>
      <div className="flex my-4">
        <InputSelect
          inputId="result-input"
          inputLabel="Result"
          inputValue={amount2}
          selectId="to-input"
          selectLabel="To"
          selectValue={units2}
          onSelectChange={(value) => onChangeUnits2(value as Temperatures)}
          options={getOptions()}
        />
      </div>
    </div>
  );
}
