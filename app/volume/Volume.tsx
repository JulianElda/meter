import { PageHeader } from "@/src/components/PageHeader";
import { VolumeUnits, VolumeUnitsTable } from "@/src/constants/volume";
import { toFixedRounding } from "@/src/util/common";
import { convertVolume } from "@/src/util/conversion";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

export function Volume() {
  const [units1, setUnits1] = useState<VolumeUnits>(VolumeUnits.l);
  const [units2, setUnits2] = useState<VolumeUnits>(VolumeUnits.us_oz);
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(
    toFixedRounding(convertVolume(amount1, units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in VolumeUnitsTable)
      tmp.push({
        label: key,
        value: key,
      });
    return tmp;
  })();

  const onChangeAmount1 = function (value: string | number) {
    setAmount1(value as number);
    setAmount2(toFixedRounding(convertVolume(value as number, units1, units2)));
  };

  const onChangeUnits1 = function (value: VolumeUnits) {
    setUnits1(value);
    setAmount2(toFixedRounding(convertVolume(amount1, value, units2)));
  };

  const onChangeUnits2 = function (value: VolumeUnits) {
    setUnits2(value);
    setAmount2(toFixedRounding(convertVolume(amount1, units1, value)));
  };

  return (
    <>
      <div>
        <PageHeader title="Volume converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            type="text"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Volume units"
            inputValue={amount1}
            onInputChange={onChangeAmount1}
            options={options}
            selectValue={units1}
            onSelectChange={(value) => onChangeUnits1(value as VolumeUnits)}
          />
          <InputSelect
            type="text"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Volume units"
            inputValue={amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={units2}
            onSelectChange={(value) => onChangeUnits2(value as VolumeUnits)}
          />
        </div>
      </Card>
    </>
  );
}
