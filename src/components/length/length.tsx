import { useCallback, useEffect, useState } from "react";
import { isValidNumber } from "util/common";
import { ROUNDING } from "consts";

enum UnitsSystems {
  IMPERIAL = "IMPERIAL",
  METRIC = "METRIC",
}

export enum LengthUnits {
  km = "km",
  m = "m",
  cm = "cm",
  inch = "inch",
  ft = "ft",
  mile = "mile",
  yard = "yard",
}

const UnitsSystemsBase: Record<UnitsSystems, LengthUnits> = {
  [UnitsSystems.IMPERIAL]: LengthUnits.inch,
  [UnitsSystems.METRIC]: LengthUnits.cm,
};

type NumberBase = {
  // name of units
  unit: LengthUnits;

  // imperial or metric
  system: UnitsSystems;

  // conversion to their respective "base"
  base: number;
};

// conversion table
const ConversionTable: Record<string, NumberBase> = {
  km: {
    unit: LengthUnits.km,
    system: UnitsSystems.METRIC,
    // 1 km - 1000 m === 10000 cm
    base: 100000,
  },
  m: {
    unit: LengthUnits.m,
    system: UnitsSystems.METRIC,
    // 1 m  - 100 cm
    base: 100,
  },
  cm: {
    unit: LengthUnits.cm,
    system: UnitsSystems.METRIC,
    // 1 cm - 1 cm
    base: 1,
  },

  // bri'ish units
  inch: {
    unit: LengthUnits.inch,
    system: UnitsSystems.IMPERIAL,
    // 1 inch - 1 inch
    base: 1,
  },
  ft: {
    unit: LengthUnits.ft,
    system: UnitsSystems.IMPERIAL,
    // 1 ft - 12 inch
    base: 12,
  },
  yard: {
    unit: LengthUnits.yard,
    system: UnitsSystems.IMPERIAL,
    // 1 yard - 36 inch === 3 ft
    base: 36,
  },
  mile: {
    unit: LengthUnits.mile,
    system: UnitsSystems.IMPERIAL,
    // 1 mile - 63360 inch === 5280 ft === 1760 yard
    base: 63360,
  },
};

/*
  base conversion used for imperial - metric conversion
  use inch to cm since its exactly 2.54,
  cm to inch should be calculated (1 / 2.54)
  instead of storing its rounded value
*/
const INCH_TO_CM: number = 2.54;

const DEFAULT_FROM: LengthUnits = ConversionTable.mile.unit;
const DEFAULT_TO: LengthUnits = ConversionTable.km.unit;
const DEFAULT_INPUT: string = "";
const DEFAULT_RESULT: string = "";

export default function Length() {
  const [from, setFrom] = useState<LengthUnits>(DEFAULT_FROM);
  const [to, setTo] = useState<LengthUnits>(DEFAULT_TO);
  const [input, setInput] = useState<string>("100");
  const [result, setResult] = useState<string>(DEFAULT_RESULT);

  const getOptions = function (): React.ReactNode {
    let tmp: JSX.Element[] = [];
    for (const key in ConversionTable)
      tmp.push(
        <option
          key={ConversionTable[key].unit}
          value={ConversionTable[key].unit}>
          {ConversionTable[key].unit}
        </option>
      );
    return tmp;
  };

  const onChangeInput = function (value: string) {
    if (value === "") setInput(DEFAULT_INPUT);
    if (!isValidNumber(value)) return;
    else setInput(value);
  };

  const convertToSameUnits = function (
    amount: number,
    from: LengthUnits,
    to: LengthUnits
  ): number {
    // convert to base units first
    return (
      (amount * ConversionTable[from].base) /
      // now convert to its target unit
      ConversionTable[to].base
    );
  };

  const convertToDifferentUnits = useCallback(function (
    amount: number,
    from: LengthUnits,
    to: LengthUnits
  ): number {
    let result: number = 0;

    // convert to base units first
    // e.g. km to cm
    let baseFrom: number = convertToSameUnits(
      amount,
      from,
      UnitsSystemsBase[ConversionTable[from].system]
    );

    // imperial -> metric
    // convert to cm: ( inch * 2.54 )
    if (ConversionTable[from].system === UnitsSystems.IMPERIAL) {
      result = baseFrom * INCH_TO_CM;
    }
    // metric -> imperial
    // convert to to inch: ( cm / 2.54 )
    else if (ConversionTable[from].system === UnitsSystems.METRIC) {
      result = baseFrom / INCH_TO_CM;
    }

    // now convert to its target units
    // e.g. inch to mile
    return result / ConversionTable[to].base;
  },
  []);

  useEffect(() => {
    if (!isValidNumber(input)) {
      setResult(DEFAULT_RESULT);
      return;
    }

    // input from number field is string type
    let parsedInput: number = parseInt(input);

    let result: number = 0;

    // convert to same base
    if (ConversionTable[from].system === ConversionTable[to].system) {
      result = convertToSameUnits(parsedInput, from, to);
    }
    // convert to different base
    else {
      result = convertToDifferentUnits(parsedInput, from, to);
    }

    // set result value
    setResult(result.toFixed(ROUNDING));
  }, [from, to, input, convertToDifferentUnits]);

  return (
    <div>
      <div className="flex">
        <div className="flex-1 mr-1">
          <label htmlFor="from-input" className="input-label">
            From
          </label>
          <div className="mt-1">
            <select
              id="from-input"
              name="from-input"
              data-testid="from-input"
              value={from}
              onChange={(event) => setFrom(event.target.value as LengthUnits)}
              className="input-field-text">
              {getOptions()}
            </select>
          </div>
        </div>
        <div className="flex-1 ml-1">
          <label htmlFor="to-input" className="input-label">
            To
          </label>
          <div className="mt-1">
            <select
              id="to-input"
              name="to-input"
              data-testid="to-input"
              value={to}
              onChange={(event) => setTo(event.target.value as LengthUnits)}
              className="input-field-text">
              {getOptions()}
            </select>
          </div>
        </div>
      </div>
      <div className="flex mt-4 mb-3">
        <div className="flex-1">
          <label htmlFor="input-input" className="input-label">
            Input
          </label>
          <input
            type="text"
            id="input-input"
            name="input-input"
            data-testid="input-input"
            value={input}
            onChange={(event) => onChangeInput(event.target.value)}
            className="input-field-text"
          />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="mt-1">
            <label htmlFor="result-input" className="input-label">
              Result
            </label>
            <input
              type="text"
              id="result-input"
              name="result-input"
              data-testid="result-input"
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
