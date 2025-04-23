import { PageHeader } from "@/src/components/PageHeader";
import { SpeedUnits, SpeedUnitsTable } from "@/src/constants/speed";
import { toFixedRounding } from "@/src/util/common";
import { convertSpeed } from "@/src/util/conversion";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

const options = (function () {
  const tmp = [];
  for (const key in SpeedUnitsTable)
    tmp.push({
      label: key,
      value: key,
    });
  return tmp;
})();

export function Speed() {
  const [units1, setUnits1] = useState<SpeedUnits>(SpeedUnits.mile_h);
  const [units2, setUnits2] = useState<SpeedUnits>(SpeedUnits.km_h);
  const [amount1, setAmount1] = useState<number>(100);
  const [amount2, setAmount2] = useState<number>(
    toFixedRounding(convertSpeed(amount1, units1, units2))
  );

  const onChangeAmount1 = function (value: string | number) {
    setAmount1(value as number);
    setAmount2(toFixedRounding(convertSpeed(value as number, units1, units2)));
  };

  const onChangeUnits1 = function (value: SpeedUnits) {
    setUnits1(value);
    setAmount2(toFixedRounding(convertSpeed(amount1, value, units2)));
  };

  const onChangeUnits2 = function (value: SpeedUnits) {
    setUnits2(value);
    setAmount2(toFixedRounding(convertSpeed(amount1, units1, value)));
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
            onInputChange={onChangeAmount1}
            options={options}
            selectValue={units1}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as SpeedUnits)
            }
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
            onSelectChange={(value: string) =>
              onChangeUnits2(value as SpeedUnits)
            }
          />
        </div>
      </Card>
    </>
  );
}
