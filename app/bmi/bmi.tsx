"use client";

import { Card, Input, InputSelect } from "@julianelda/scratchpad";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";
import { LengthConversionTable, LengthUnits } from "@/src/constants/length";
import { WeightConversionTable, WeightUnits } from "@/src/constants/weight";
import { calculateBmi, categorizeBmi } from "@/src/util/bmi";
import { toFixedRounding } from "@/src/util/common";
import { convertLength, convertWeight } from "@/src/util/conversion";

const weightOptions = (function () {
  const tmp = [];
  for (const key in WeightConversionTable) {
    tmp.push({
      label: key,
      value: key,
    });
  }
  return tmp;
})();

const lengthOptions = (function () {
  const tmp = [];
  for (const key in LengthConversionTable) {
    tmp.push({
      label: key,
      value: key,
    });
  }
  return tmp;
})();

export function Bmi() {
  const [height, setHeight] = useState<number>(175);
  const [lengthUnits, setLengthUnits] = useState<LengthUnits>(LengthUnits.cm);
  const [weight, setWeight] = useState<number>(70);
  const [weightUnits, setWeightUnits] = useState<WeightUnits>(WeightUnits.kg);
  const bmi = toFixedRounding(
    calculateBmi(
      convertWeight(weight, weightUnits, WeightUnits.kg),
      convertLength(height, lengthUnits, LengthUnits.m)
    )
  );
  const category = categorizeBmi(bmi);

  return (
    <div>
      <div>
        <PageHeader title="BMI Calculator" />
      </div>
      <Card>
        <div className="flex flex-col gap-2">
          <InputSelect
            inputId="height-input"
            inputLabel="Height"
            inputMax={250}
            inputMin={50}
            inputValue={height}
            onInputChange={setHeight as (value: number | string) => void}
            onSelectChange={(value: string) =>
              setLengthUnits(value as LengthUnits)
            }
            options={lengthOptions}
            selectId="height-select"
            selectLabel="Length units"
            selectValue={lengthUnits}
            type="number"
          />
          <InputSelect
            inputId="weight-input"
            inputLabel="Weight"
            inputMax={500}
            inputMin={10}
            inputValue={weight}
            onInputChange={setWeight as (value: number | string) => void}
            onSelectChange={(value: string) =>
              setWeightUnits(value as WeightUnits)
            }
            options={weightOptions}
            selectId="weight-select"
            selectLabel="Weight units"
            selectValue={weightUnits}
            type="number"
          />
          <Input
            disabled={true}
            id="bmi-bmi"
            label="BMI"
            type="text"
            value={bmi}
          />
          <Input
            disabled={true}
            id="bmi-category"
            label="Category"
            type="text"
            value={category}
          />
        </div>
      </Card>
    </div>
  );
}
