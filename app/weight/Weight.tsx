import { PageHeader } from "@/src/components/PageHeader";
import { WeightConversionTable, WeightUnits } from "@/src/constants/weight";
import { toFixedRounding } from "@/src/util/common";
import { convertWeight } from "@/src/util/conversion";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

export function Weight() {
  const [units1, setUnits1] = useState<WeightUnits>(WeightUnits.kg);
  const [units2, setUnits2] = useState<WeightUnits>(WeightUnits.pound);
  const [amount1, setAmount1] = useState<number>(100);
  const [amount2, setAmount2] = useState<number>(
    toFixedRounding(convertWeight(amount1, units1, units2))
  );

  const options = (function () {
    const tmp = [];
    for (const key in WeightConversionTable)
      tmp.push({
        label: key,
        value: key,
      });
    return tmp;
  })();

  const onChangeAmount1 = function (value: number) {
    setAmount1(value);
    setAmount2(toFixedRounding(convertWeight(value, units1, units2)));
  };

  const onChangeUnits1 = function (value: WeightUnits) {
    setUnits1(value);
    setAmount2(toFixedRounding(convertWeight(amount1, value, units2)));
  };

  const onChangeUnits2 = function (value: WeightUnits) {
    setUnits2(value);
    setAmount2(toFixedRounding(convertWeight(amount1, units1, value)));
  };

  return (
    <>
      <div>
        <PageHeader title="Weight converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            type="number"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Weight units"
            inputValue={amount1}
            onInputChange={onChangeAmount1 as (value: string | number) => void}
            options={options}
            selectValue={units1}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as WeightUnits)
            }
          />
          <InputSelect
            type="number"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Weight units"
            inputValue={amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={units2}
            onSelectChange={(value: string) =>
              onChangeUnits2(value as WeightUnits)
            }
          />
        </div>
      </Card>
    </>
  );
}
