import { useEffect, useState } from "react";
import { isValidNumber } from "util/common";
import { ROUNDING } from "consts";
import Input from "components/form/input";
import Select, { SelectOption } from "components/form/select";

export enum Temperatures {
  C = "C",
  F = "F",
  K = "K",
}

const DEFAULT_INPUT: string = "";
const DEFAULT_RESULT: string = "";

export default function Temperature() {
  const [from, setFrom] = useState<Temperatures>(Temperatures.F);
  const [to, setTo] = useState<Temperatures>(Temperatures.C);

  const [input, setInput] = useState<string>("100");
  const [result, setResult] = useState<string>(DEFAULT_RESULT);

  const K_C: number = 273.15;
  const F_C: number = 32;

  const getOptions = function (): SelectOption[] {
    let tmp: SelectOption[] = [];
    for (const key in Temperatures)
      tmp.push({
        display: Temperatures[key],
        value: Temperatures[key],
      });
    return tmp;
  };

  const onChangeInput = function (value: string) {
    if (value === "") setInput(DEFAULT_INPUT);
    if (!isValidNumber(value)) return;
    else setInput(value);
  };

  useEffect(() => {
    if (!isValidNumber(input)) {
      setResult(DEFAULT_RESULT);
      return;
    }

    let parsed: number = parseInt(input);

    // Celcius is baseline
    let c: number;
    switch (from) {
      case Temperatures.C: {
        c = parsed;
        break;
      }
      case Temperatures.F: {
        c = (parsed - F_C) * (5 / 9);
        break;
      }
      case Temperatures.K: {
        c = parsed - K_C;
        break;
      }
    }

    let result: number;
    switch (to) {
      case Temperatures.C: {
        result = c;
        break;
      }
      case Temperatures.F: {
        result = c * (9 / 5) + F_C;
        break;
      }
      case Temperatures.K: {
        result = c + K_C;
        break;
      }
    }
    // set result value
    setResult(result.toFixed(ROUNDING));
  }, [from, to, input]);

  return (
    <div>
      <div className="flex space-x-2">
        <Select
          id="from-input"
          label="From"
          value={from}
          onChange={(value) => setFrom(value as Temperatures)}
          options={getOptions()}
        />
        <Select
          id="to-input"
          label="To"
          value={to}
          onChange={(value) => setTo(value as Temperatures)}
          options={getOptions()}
        />
      </div>
      <div className="flex my-4">
        <Input
          id="input-input"
          label="Input"
          value={input}
          onChange={(value) => onChangeInput(value)}
        />
      </div>
      <div className="flex">
        <Input id="result-input" label="Result" value={result} />
      </div>
    </div>
  );
}
