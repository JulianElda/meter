"use client";

import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";
import { LengthConversionTable, LengthUnits } from "@/src/constants/length";
import { toFixedRounding } from "@/src/util/common";
import { convertLength } from "@/src/util/conversion";

export function Length() {
  const [units1, setUnits1] = useState<LengthUnits>(LengthUnits.km);
  const [units2, setUnits2] = useState<LengthUnits>(LengthUnits.mile);
  const [amount1, setAmount1] = useState<number>(100);
  const [amount2, setAmount2] = useState<number>(
    toFixedRounding(convertLength(amount1, units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in LengthConversionTable) {
      tmp.push({
        label: key,
        value: key,
      });
    }
    return tmp;
  })();

  const onChangeAmount1 = function (value: number) {
    setAmount1(value);
    setAmount2(toFixedRounding(convertLength(value, units1, units2)));
  };

  const onChangeUnits1 = function (value: LengthUnits) {
    setUnits1(value);
    setAmount2(toFixedRounding(convertLength(amount1, value, units2)));
  };

  const onChangeUnits2 = function (value: LengthUnits) {
    setUnits2(value);
    setAmount2(toFixedRounding(convertLength(amount1, units1, value)));
  };

  return (
    <>
      <div>
        <PageHeader title="Length converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            hideLabel={true}
            inputId="from-input"
            inputLabel="Amount"
            inputValue={amount1}
            onInputChange={onChangeAmount1 as (value: number | string) => void}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as LengthUnits)
            }
            options={options}
            selectId="from-select"
            selectLabel="Length units"
            selectValue={units1}
            type="number"
          />
          <InputSelect
            hideLabel={true}
            inputId="result-input"
            inputLabel="Amount"
            inputValue={amount2}
            onSelectChange={(value: string) =>
              onChangeUnits2(value as LengthUnits)
            }
            options={options}
            selectId="result-select"
            selectLabel="Length units"
            selectValue={units2}
            type="number"
          />
        </div>
      </Card>
    </>
  );
}
