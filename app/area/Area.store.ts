import { AreaUnits } from "@/src/constants/area";
import { toFixedRounding } from "@/src/util/common";
import { convertArea } from "@/src/util/conversion";

type AreaState = {
  units1: AreaUnits;
  units2: AreaUnits;
  amount1: number;
  amount2: number;
};

export const initialAreaState: AreaState = {
  units1: AreaUnits.km,
  units2: AreaUnits.mile,
  amount1: 100,
  amount2: toFixedRounding(convertArea(100, AreaUnits.km, AreaUnits.mile)),
};

export enum AreaStoreActions {
  units1,
  units2,
  amount1,
}

type AreaStoreActionType = {
  type: AreaStoreActions;
  payload: AreaUnits | number;
};

function setAmount1Handler(state: AreaState, payload: number): AreaState {
  return {
    ...state,
    amount1: payload,
    amount2: toFixedRounding(convertArea(payload, state.units1, state.units2)),
  };
}

function setUnits1Handler(state: AreaState, payload: AreaUnits): AreaState {
  return {
    ...state,
    units1: payload,
    amount2: toFixedRounding(convertArea(state.amount1, payload, state.units2)),
  };
}

function setUnits2Handler(state: AreaState, payload: AreaUnits): AreaState {
  return {
    ...state,
    units2: payload,
    amount2: toFixedRounding(convertArea(state.amount1, state.units1, payload)),
  };
}

export function areaReducer(state: AreaState, action: AreaStoreActionType) {
  switch (action.type) {
    case AreaStoreActions.amount1:
      return setAmount1Handler(state, action.payload as number);
    case AreaStoreActions.units1:
      return setUnits1Handler(state, action.payload as AreaUnits);
    case AreaStoreActions.units2:
      return setUnits2Handler(state, action.payload as AreaUnits);
    default:
      return state;
  }
}
