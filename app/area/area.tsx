"use client";

import { Card, InputSelect } from "@julianelda/scratchpad";
import { useReducer } from "react";

import type { AreaUnits } from "@/src/constants/area";

import { PageHeader } from "@/src/components/page-header/page-header";
import { AreaUnitsTable } from "@/src/constants/area";

import { areaReducer, AreaStoreActions, initialAreaState } from "./area.store";

const options = (function () {
  const tmp = [];
  for (const key in AreaUnitsTable) {
    tmp.push({
      label: key,
      value: key,
    });
  }
  return tmp;
})();

export function Area() {
  const [state, dispatch] = useReducer(areaReducer, initialAreaState);

  const onChangeAmount1 = function (value: number) {
    dispatch({
      payload: value,
      type: AreaStoreActions.amount1,
    });
  };

  const onChangeUnits1 = function (value: AreaUnits) {
    dispatch({
      payload: value,
      type: AreaStoreActions.units1,
    });
  };

  const onChangeUnits2 = function (value: AreaUnits) {
    dispatch({
      payload: value,
      type: AreaStoreActions.units2,
    });
  };

  return (
    <>
      <div>
        <PageHeader title="Area converter" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            hideLabel={true}
            inputId="from-input"
            inputLabel="Amount"
            inputValue={state.amount1}
            onInputChange={(value) => onChangeAmount1(value as number)}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as AreaUnits)
            }
            options={options}
            selectId="from-select"
            selectLabel="Area units"
            selectValue={state.units1}
            type="text"
          />
          <InputSelect
            hideLabel={true}
            inputId="result-input"
            inputLabel="Amount"
            inputValue={state.amount2}
            onSelectChange={(value: string) =>
              onChangeUnits2(value as AreaUnits)
            }
            options={options}
            selectId="result-select"
            selectLabel="Area units"
            selectValue={state.units2}
            type="text"
          />
        </div>
      </Card>
    </>
  );
}
