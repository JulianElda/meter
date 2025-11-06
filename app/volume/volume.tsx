"use client";

import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";
import { VolumeUnits, VolumeUnitsTable } from "@/src/constants/volume";
import { toFixedRounding } from "@/src/util/common";
import { convertVolume } from "@/src/util/conversion";

export function Volume() {
  const [units1, setUnits1] = useState<VolumeUnits>(VolumeUnits.l);
  const [units2, setUnits2] = useState<VolumeUnits>(VolumeUnits.us_oz);
  const [amount1, setAmount1] = useState<number>(100);
  const [amount2, setAmount2] = useState<number>(
    toFixedRounding(convertVolume(amount1, units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in VolumeUnitsTable) {
      tmp.push({
        label: key,
        value: key,
      });
    }
    return tmp;
  })();

  const onChangeAmount1 = function (value: number | string) {
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
            hideLabel={true}
            inputId="from-input"
            inputLabel="Amount"
            inputValue={amount1}
            onInputChange={onChangeAmount1}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as VolumeUnits)
            }
            options={options}
            selectId="from-select"
            selectLabel="Volume units"
            selectValue={units1}
            type="number"
          />
          <InputSelect
            hideLabel={true}
            inputId="result-input"
            inputLabel="Amount"
            inputValue={amount2}
            onSelectChange={(value: string) =>
              onChangeUnits2(value as VolumeUnits)
            }
            options={options}
            selectId="result-select"
            selectLabel="Volume units"
            selectValue={units2}
            type="number"
          />
        </div>
      </Card>
    </>
  );
}
