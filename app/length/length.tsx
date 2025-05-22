import { PageHeader } from "@/src/components/page-header";
import { LengthConversionTable, LengthUnits } from "@/src/constants/length";
import { toFixedRounding } from "@/src/util/common";
import { convertLength } from "@/src/util/conversion";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

export function Length() {
  const [units1, setUnits1] = useState<LengthUnits>(LengthUnits.km);
  const [units2, setUnits2] = useState<LengthUnits>(LengthUnits.mile);
  const [amount1, setAmount1] = useState<number>(100);
  const [amount2, setAmount2] = useState<number>(
    toFixedRounding(convertLength(amount1, units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in LengthConversionTable)
      tmp.push({
        label: key,
        value: key,
      });
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
            type="number"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Length units"
            inputValue={amount1}
            onInputChange={onChangeAmount1 as (value: string | number) => void}
            options={options}
            selectValue={units1}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as LengthUnits)
            }
          />
          <InputSelect
            type="number"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Length units"
            inputValue={amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={units2}
            onSelectChange={(value: string) =>
              onChangeUnits2(value as LengthUnits)
            }
          />
        </div>
      </Card>
    </>
  );
}
