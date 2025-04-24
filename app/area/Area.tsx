import { PageHeader } from "@/src/components/PageHeader";
import { AreaUnits, AreaUnitsTable } from "@/src/constants/area";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useReducer } from "react";
import { areaReducer, AreaStoreActions, initialAreaState } from "./Area.store";

const options = (function () {
  const tmp = [];
  for (const key in AreaUnitsTable)
    tmp.push({
      label: key,
      value: key,
    });
  return tmp;
})();

export function Area() {
  const [state, dispatch] = useReducer(areaReducer, initialAreaState);

  const onChangeAmount1 = function (value: number) {
    dispatch({
      type: AreaStoreActions.amount1,
      payload: value,
    });
  };

  const onChangeUnits1 = function (value: AreaUnits) {
    dispatch({
      type: AreaStoreActions.units1,
      payload: value,
    });
  };

  const onChangeUnits2 = function (value: AreaUnits) {
    dispatch({
      type: AreaStoreActions.units2,
      payload: value,
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
            type="text"
            inputId="from-input"
            selectId="from-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Area units"
            inputValue={state.amount1}
            onInputChange={(value) => onChangeAmount1(value as number)}
            options={options}
            selectValue={state.units1}
            onSelectChange={(value: string) =>
              onChangeUnits1(value as AreaUnits)
            }
          />
          <InputSelect
            type="text"
            inputId="result-input"
            selectId="result-select"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Area units"
            inputValue={state.amount2}
            onInputChange={() => undefined}
            options={options}
            selectValue={state.units2}
            onSelectChange={(value: string) =>
              onChangeUnits2(value as AreaUnits)
            }
          />
        </div>
      </Card>
    </>
  );
}
