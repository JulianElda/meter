import { useEffect, useState } from "react";

export enum LengthUnits {
  km = "km",
  m = "m",
  cm = "cm",
  inch = "inch",
  ft = "ft",
  mile = "mile",
  yard = "yard",
}

type NumberBase = {
  unit: LengthUnits;
  base: number;
};

// TODO: better imperial units conversion
const Lengths: Record<string, NumberBase> = {
  km: { unit: LengthUnits.km, base: 1000 },
  m: { unit: LengthUnits.m, base: 1 },
  cm: { unit: LengthUnits.cm, base: 0.01 },
  inch: { unit: LengthUnits.inch, base: 0.0254 },
  ft: { unit: LengthUnits.ft, base: 0.3048 },
  mile: { unit: LengthUnits.mile, base: 1609.34 },
  yard: { unit: LengthUnits.yard, base: 0.9144 },
};

const ROUNDING: number = 3;
const DEFAULT_FROM: LengthUnits = Lengths.m.unit;
const DEFAULT_TO: LengthUnits = Lengths.inch.unit;
const DEFAULT_INPUT: string = "0";
const DEFAULT_RESULT: string = "";

export default function Length() {
  const [from, setFrom] = useState<LengthUnits>(DEFAULT_FROM);
  const [to, setTo] = useState<LengthUnits>(DEFAULT_TO);
  const [input, setInput] = useState<string>(DEFAULT_INPUT);
  const [result, setResult] = useState<string>(DEFAULT_RESULT);

  const getOptions = function (): React.ReactNode {
    let tmp: JSX.Element[] = [];
    for (const key in Lengths)
      tmp.push(
        <option key={Lengths[key].unit} value={Lengths[key].unit}>
          {Lengths[key].unit}
        </option>
      );
    return tmp;
  };

  const isValidNumber = function (value: string) {
    if (value === "") return false;
    else if (isNaN(Number(value))) return false;
    else return true;
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

    // convert selected from to meter
    let baseFrom: number = parseInt(input) * Lengths[from].base;

    // convert baseFrom to selected target
    let baseResult: number = baseFrom / Lengths[to].base;

    // set result value
    setResult(baseResult.toFixed(ROUNDING));
  }, [from, to, input]);

  return (
    <div>
      <div className="flex">
        <div className="flex-1 mr-1">
          <label
            htmlFor="from"
            className="block text-sm font-medium text-gray-700">
            From
          </label>
          <div className="mt-1">
            <select
              id="from"
              name="from"
              data-testid="from"
              value={from}
              onChange={(event) => setFrom(event.target.value as LengthUnits)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              {getOptions()}
            </select>
          </div>
        </div>
        <div className="flex-1 ml-1">
          <label
            htmlFor="to"
            className="block text-sm font-medium text-gray-700">
            To
          </label>
          <div className="mt-1">
            <select
              id="to"
              name="to"
              data-testid="to"
              value={to}
              onChange={(event) => setTo(event.target.value as LengthUnits)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              {getOptions()}
            </select>
          </div>
        </div>
      </div>
      <div className="flex mt-4 mb-3">
        <div className="flex-1">
          <label
            htmlFor="input"
            className="block text-sm font-medium text-gray-700">
            Input
          </label>
          <input
            type="text"
            id="input"
            name="input"
            data-testid="input"
            value={input}
            onChange={(event) => onChangeInput(event.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="mt-1">
            <label
              htmlFor="result"
              className="block text-sm font-medium text-gray-700">
              Result
            </label>
            <input
              type="text"
              id="result"
              name="result"
              data-testid="result"
              value={result}
              readOnly
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
