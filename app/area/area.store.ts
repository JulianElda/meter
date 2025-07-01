import { AreaUnits } from "@/src/constants/area";
import { toFixedRounding } from "@/src/util/common";
import { convertArea } from "@/src/util/conversion";

interface AreaState {
  amount1: number;
  amount2: number;
  units1: AreaUnits;
  units2: AreaUnits;
}

export const initialAreaState: AreaState = {
  amount1: 100,
  amount2: toFixedRounding(convertArea(100, AreaUnits.km, AreaUnits.mile)),
  units1: AreaUnits.km,
  units2: AreaUnits.mile,
};

export enum AreaStoreActions {
  units1,
  units2,
  amount1,
}

interface AreaStoreActionType {
  payload: AreaUnits | number;
  type: AreaStoreActions;
}

export function areaReducer(state: AreaState, action: AreaStoreActionType) {
  switch (action.type) {
    case AreaStoreActions.amount1: {
      return setAmount1Handler(state, action.payload as number);
    }
    case AreaStoreActions.units1: {
      return setUnits1Handler(state, action.payload as AreaUnits);
    }
    case AreaStoreActions.units2: {
      return setUnits2Handler(state, action.payload as AreaUnits);
    }
    default: {
      return state;
    }
  }
}

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
    amount2: toFixedRounding(convertArea(state.amount1, payload, state.units2)),
    units1: payload,
  };
}

function setUnits2Handler(state: AreaState, payload: AreaUnits): AreaState {
  return {
    ...state,
    amount2: toFixedRounding(convertArea(state.amount1, state.units1, payload)),
    units2: payload,
  };
}
