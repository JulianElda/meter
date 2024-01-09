import {
  Card,
  InputField,
  InputLabel,
  SelectField,
} from "@julianelda/scratchpad";
import { useState } from "react";
import Header from "src/components/header/header";
import { LengthConversionTable, LengthUnits } from "src/constants/length";
import { isValidNumber } from "src/util/common";
import { convertLength } from "src/util/conversion";

const DEFAULT_FROM: LengthUnits = LengthConversionTable.km.unit;
const DEFAULT_TO: LengthUnits = LengthConversionTable.mile.unit;
const DEFAULT_INPUT: string = "";

export default function Length() {
  const [units1, setUnits1] = useState<LengthUnits>(DEFAULT_FROM);
  const [units2, setUnits2] = useState<LengthUnits>(DEFAULT_TO);

  const [amount1, setAmount1] = useState<string>("100");
  const [amount2, setAmount2] = useState<string>(
    convertLength(amount1, units1, units2)
  );

  const getOptions = function () {
    const tmp = [];
    for (const key in LengthConversionTable)
      tmp.push({
        label: LengthConversionTable[key].unit as string,
        value: LengthConversionTable[key].unit,
      });
    return tmp;
  };

  const onChangeAmount1 = function (value: string) {
    if (value === "") setAmount1(DEFAULT_INPUT);
    if (!isValidNumber(value)) return;
    else setAmount1(value);
    setAmount2(convertLength(value, units1, units2));
  };

  const onChangeUnits1 = function (value: LengthUnits) {
    setUnits1(value);
    setAmount2(convertLength(amount1, value, units2));
  };

  const onChangeUnits2 = function (value: LengthUnits) {
    setUnits2(value);
    setAmount2(convertLength(amount1, units1, value));
  };

  return (
    <>
      <div>
        <Header title="Length conversion" />
      </div>
      <Card>
        <div className="mb-2">
          <InputLabel
            id="from-input"
            label="Input"
            hideLabel={false}
          />
          <div className="relative mt-2 rounded-md shadow-sm">
            <InputField
              id="input-input"
              type="text"
              value={amount1}
              onChange={onChangeAmount1}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <SelectField
                id="from-input"
                value={units1}
                options={getOptions()}
                onChange={(value) => onChangeUnits1(value as LengthUnits)}
              />
            </div>
          </div>
        </div>

        <div className="">
          <InputLabel
            id="result-input"
            label="Result"
            hideLabel={false}
          />
          <div className="relative mt-2 rounded-md shadow-sm">
            <InputField
              id="result-input"
              type="text"
              value={amount2}
              onChange={() => undefined}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <SelectField
                id="to-input"
                value={units2}
                options={getOptions()}
                onChange={(value) => onChangeUnits2(value as LengthUnits)}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
