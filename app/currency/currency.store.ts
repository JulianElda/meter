import { toFixedRounding } from "@/src/util/common";

export type Rates = Record<string, number>;

type CurrencyState = {
  rates: Rates;
  currency1: string;
  currency2: string;
  amount1: number;
  amount2: number;
};

export const initialCurrencyState: CurrencyState = {
  rates: {},
  currency1: "EUR",
  currency2: "USD",
  amount1: 100,
  amount2: 0,
};

export enum CurrencyStoreActions {
  RATE,
  CURRENCY_1,
  CURRENCY_2,
  AMOUNT_1,
  AMOUNT_2,
}

type CurrencyStoreActionType = {
  type: CurrencyStoreActions;
  payload: Rates | string | number;
};

function setRatesHandler(state: CurrencyState, payload: Rates): CurrencyState {
  const newAmount2 = toFixedRounding(state.amount1 * payload[state.currency2]);
  return {
    ...state,
    rates: payload,
    amount2: newAmount2,
  };
}

function setCurrency1ChangeHandler(
  state: CurrencyState,
  payload: string
): CurrencyState {
  return {
    ...state,
    currency1: payload,
  };
}

function setCurrency2ChangeHandler(
  state: CurrencyState,
  payload: string
): CurrencyState {
  const newAmount2 = toFixedRounding(state.amount1 * state.rates[payload]);

  return {
    ...state,
    currency2: payload,
    amount2: newAmount2,
  };
}

function setAmount1ChangeHandler(
  state: CurrencyState,
  payload: number
): CurrencyState {
  let newAmount2 = 0;
  if (!payload) newAmount2 = 0;
  else {
    newAmount2 = toFixedRounding(payload * state.rates[state.currency2]);
  }
  return {
    ...state,
    amount1: payload,
    amount2: newAmount2,
  };
}

function setAmount2ChangeHandler(
  state: CurrencyState,
  payload: number
): CurrencyState {
  let newAmount1 = 0;
  if (!payload) newAmount1 = 0;
  else {
    newAmount1 = toFixedRounding(payload / state.rates[state.currency2]);
  }
  return {
    ...state,
    amount1: newAmount1,
    amount2: payload,
  };
}

export function currenciesReducer(
  state: CurrencyState,
  action: CurrencyStoreActionType
) {
  switch (action.type) {
    case CurrencyStoreActions.RATE:
      return setRatesHandler(state, action.payload as Rates);
    case CurrencyStoreActions.CURRENCY_1:
      return setCurrency1ChangeHandler(state, action.payload as string);
    case CurrencyStoreActions.CURRENCY_2:
      return setCurrency2ChangeHandler(state, action.payload as string);
    case CurrencyStoreActions.AMOUNT_1:
      return setAmount1ChangeHandler(state, action.payload as number);
    case CurrencyStoreActions.AMOUNT_2:
      return setAmount2ChangeHandler(state, action.payload as number);
    default:
      return state;
  }
}
