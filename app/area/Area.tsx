import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";
import { AreaUnits, AreaUnitsTable } from "@/src/constants/area";
import { PageHeader } from "@/src/components/PageHeader";
import { convertArea } from "@/src/util/conversion/area";
import { toFixedRoundingNumber } from "@/src/util/common";

export function Area() {
  const [units1, setUnits1] = useState<AreaUnits>(AreaUnits.km);
  const [units2, setUnits2] = useState<AreaUnits>(AreaUnits.mile);
  const [amount1, setAmount1] = useState<number>(100);
  const [amount2, setAmount2] = useState<number>(
    toFixedRoundingNumber(convertArea(amount1, units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in AreaUnitsTable)
      tmp.push({
        label: key,
        value: key,
      });
    return tmp;
  })();

  const onChangeAmount1 = function (value: string | number) {
    setAmount1(value as number);
    setAmount2(
      toFixedRoundingNumber(convertArea(value as number, units1, units2))
    );
  };

  const onChangeUnits1 = function (value: AreaUnits) {
    setUnits1(value);
    setAmount2(toFixedRoundingNumber(convertArea(amount1, value, units2)));
  };

  const onChangeUnits2 = function (value: AreaUnits) {
    setUnits2(value);
    setAmount2(toFixedRoundingNumber(convertArea(amount1, units1, value)));
  };

  return (
    <>
      <div>
        <PageHeader title="Area converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            type="text"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Area units"
            inputValue={amount1}
            onInputChange={onChangeAmount1}
            options={options}
            selectValue={units1}
            onSelectChange={(value) => onChangeUnits1(value as AreaUnits)}
          />
          <InputSelect
            type="text"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Area units"
            inputValue={amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={units2}
            onSelectChange={(value) => onChangeUnits2(value as AreaUnits)}
          />
        </div>
      </Card>
    </>
  );
}
