import { convertBaseNumber } from "@/src/util/conversion";

export type BaseState = {
  binary: string;
  decimal: string;
  hex: string;
};

export const initialBaseState: BaseState = {
  binary: "1100100",
  decimal: "100",
  hex: "64",
};

export enum BaseStoreActions {
  BINARY = "BINARY",
  DECIMAL = "DECIMAL",
  HEX = "HEX",
}

type ValueChangePayload = {
  value: string;
};

type BaseStoreActionType = {
  type: BaseStoreActions;
  payload: ValueChangePayload;
};

function setBinaryHandler({ value }: ValueChangePayload): BaseState {
  return {
    binary: value,
    decimal: convertBaseNumber(value, 2, 10),
    hex: convertBaseNumber(value, 2, 16),
  };
}

function setDecimalHandler({ value }: ValueChangePayload): BaseState {
  return {
    binary: convertBaseNumber(value, 10, 2),
    decimal: value,
    hex: convertBaseNumber(value, 10, 16),
  };
}

function setHexHandler({ value }: ValueChangePayload): BaseState {
  return {
    binary: convertBaseNumber(value, 16, 2),
    decimal: convertBaseNumber(value, 16, 10),
    hex: value,
  };
}

export function baseReducer(state: BaseState, action: BaseStoreActionType) {
  switch (action.type) {
    case BaseStoreActions.BINARY:
      return setBinaryHandler(action.payload);
    case BaseStoreActions.DECIMAL:
      return setDecimalHandler(action.payload);
    case BaseStoreActions.HEX:
      return setHexHandler(action.payload);
    default:
      return state;
  }
}
