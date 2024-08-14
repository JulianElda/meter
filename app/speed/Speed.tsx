import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";
import { PageHeader } from "@/src/components/PageHeader";
import { isValidNumber, toFixedRounding } from "@/src/util/common";
import { SpeedUnits, SpeedUnitsTable } from "@/src/constants/speed";
import { convertSpeed } from "@/src/util/conversion";

const DEFAULT_FROM: SpeedUnits = SpeedUnits.mile_h;
const DEFAULT_TO: SpeedUnits = SpeedUnits.km_h;
const DEFAULT_INPUT: string = "";

export function Speed() {
  const [units1, setUnits1] = useState<SpeedUnits>(DEFAULT_FROM);
  const [units2, setUnits2] = useState<SpeedUnits>(DEFAULT_TO);

  const [amount1, setAmount1] = useState<string>("100");
  const [amount2, setAmount2] = useState<string>(
    toFixedRounding(convertSpeed(parseInt(amount1), units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in SpeedUnitsTable)
      tmp.push({
        label: key,
        value: key,
      });
    return tmp;
  })();

  const onChangeAmount1 = function (value: string) {
    if (value === "") setAmount1(DEFAULT_INPUT);
    if (!isValidNumber(value)) return;
    else setAmount1(value);
    setAmount2(toFixedRounding(convertSpeed(parseInt(value), units1, units2)));
  };

  const onChangeUnits1 = function (value: SpeedUnits) {
    setUnits1(value);
    setAmount2(toFixedRounding(convertSpeed(parseInt(amount1), value, units2)));
  };

  const onChangeUnits2 = function (value: SpeedUnits) {
    setUnits2(value);
    setAmount2(toFixedRounding(convertSpeed(parseInt(amount1), units1, value)));
  };

  return (
    <>
      <div>
        <PageHeader title="Speed converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            type="text"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Speed units"
            inputValue={amount1}
            onInputChange={(value) => onChangeAmount1(value as string)}
            options={options}
            selectValue={units1}
            onSelectChange={(value) => onChangeUnits1(value as SpeedUnits)}
          />
          <InputSelect
            type="text"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Speed units"
            inputValue={amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={units2}
            onSelectChange={(value) => onChangeUnits2(value as SpeedUnits)}
          />
        </div>
      </Card>
    </>
  );
}
