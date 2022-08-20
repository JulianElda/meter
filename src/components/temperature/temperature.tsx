import { useEffect, useState } from "react";
import { isValidNumber, ROUNDING } from "util/common";

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

  const getOptions = function (): React.ReactNode {
    return (
      <>
        <option key="C" value="C">
          C
        </option>
        <option key="F" value="F">
          F
        </option>
        <option key="K" value="K">
          K
        </option>
      </>
    );
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
      <div className="flex">
        <div className="flex-1 mr-1">
          <label htmlFor="from" className="input-label">
            From
          </label>
          <div className="mt-1">
            <select
              id="from"
              name="from"
              data-testid="from"
              value={from}
              onChange={(event) => setFrom(event.target.value as Temperatures)}
              className="input-field-text">
              {getOptions()}
            </select>
          </div>
        </div>
        <div className="flex-1 ml-1">
          <label htmlFor="to" className="input-label">
            To
          </label>
          <div className="mt-1">
            <select
              id="to"
              name="to"
              data-testid="to"
              value={to}
              onChange={(event) => setTo(event.target.value as Temperatures)}
              className="input-field-text">
              {getOptions()}
            </select>
          </div>
        </div>
      </div>
      <div className="flex mt-4 mb-3">
        <div className="flex-1">
          <label htmlFor="input" className="input-label">
            Input
          </label>
          <input
            type="text"
            id="input"
            name="input"
            data-testid="input"
            value={input}
            onChange={(event) => onChangeInput(event.target.value)}
            className="input-field-text"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="mt-1">
            <label htmlFor="result" className="input-label">
              Result
            </label>
            <input
              type="text"
              id="result"
              name="result"
              data-testid="result"
              value={result}
              readOnly
              className="input-field-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
