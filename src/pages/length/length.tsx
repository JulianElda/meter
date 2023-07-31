import { useState } from "react";

import Card from "components/card/card";
import { SelectOption } from "components/form/select";
import InputSelect from "components/form/inputselect";
import Header from "components/header/header";

import { LengthConversionTable, LengthUnits } from "constants/length";
import { isValidNumber } from "util/common";
import { convertLength } from "util/conversion";

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

  const getOptions = function (): SelectOption[] {
    let tmp: SelectOption[] = [];
    for (const key in LengthConversionTable)
      tmp.push({
        display: LengthConversionTable[key].unit as string,
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
        <div className="flex my-4">
          <InputSelect
            inputId="input-input"
            inputLabel="Input"
            inputValue={amount1}
            onInputChange={(value) => onChangeAmount1(value)}
            selectId="from-input"
            selectLabel="From"
            selectValue={units1}
            onSelectChange={(value) => onChangeUnits1(value as LengthUnits)}
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
            onSelectChange={(value) => onChangeUnits2(value as LengthUnits)}
            options={getOptions()}
          />
        </div>
      </Card>
    </>
  );
}
