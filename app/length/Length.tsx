import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";
import { PageHeader } from "@/src/components/PageHeader";
import { LengthConversionTable, LengthUnits } from "@/src/constants/length";
import { isValidNumber, toFixedRounding } from "@/src/util/common";
import { convertLength } from "@/src/util/conversion";

const DEFAULT_FROM: LengthUnits = LengthUnits.km;
const DEFAULT_TO: LengthUnits = LengthUnits.mile;
const DEFAULT_INPUT: string = "";

export function Length() {
  const [units1, setUnits1] = useState<LengthUnits>(DEFAULT_FROM);
  const [units2, setUnits2] = useState<LengthUnits>(DEFAULT_TO);

  const [amount1, setAmount1] = useState<string>("100");
  const [amount2, setAmount2] = useState<string>(
    toFixedRounding(convertLength(parseInt(amount1), units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in LengthConversionTable)
      tmp.push({
        label: LengthConversionTable[key].unit as string,
        value: LengthConversionTable[key].unit,
      });
    return tmp;
  })();

  const onChangeAmount1 = function (value: string) {
    if (value === "") setAmount1(DEFAULT_INPUT);
    if (!isValidNumber(value)) return;
    else setAmount1(value);
    setAmount2(toFixedRounding(convertLength(parseInt(value), units1, units2)));
  };

  const onChangeUnits1 = function (value: LengthUnits) {
    setUnits1(value);
    setAmount2(
      toFixedRounding(convertLength(parseInt(amount1), value, units2))
    );
  };

  const onChangeUnits2 = function (value: LengthUnits) {
    setUnits2(value);
    setAmount2(
      toFixedRounding(convertLength(parseInt(amount1), units1, value))
    );
  };

  return (
    <>
      <div>
        <PageHeader title="Length converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            type="text"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Length units"
            inputValue={amount1}
            onInputChange={(value) => onChangeAmount1(value as string)}
            options={options}
            selectValue={units1}
            onSelectChange={(value) => onChangeUnits1(value as LengthUnits)}
          />
          <InputSelect
            type="text"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Length units"
            inputValue={amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={units2}
            onSelectChange={(value) => onChangeUnits2(value as LengthUnits)}
          />
        </div>
      </Card>
    </>
  );
}
