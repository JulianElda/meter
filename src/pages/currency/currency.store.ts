import { isValidNumber } from "src/util/common";

export type Rates = Record<string, number>;

export type CurrencyState = {
  rates: Rates;
  currency1: string;
  currency2: string;
  amount1: string;
  amount2: string;
};

export const initialCurrencyState: CurrencyState = {
  rates: {},
  currency1: "EUR",
  currency2: "USD",
  amount1: "100",
  amount2: "",
};

export enum CurrencyStoreActions {
  RATE = "RATE",
  CURRENCY_1 = "CURRENCY_1",
  CURRENCY_2 = "CURRENCY_2",
  AMOUNT_1 = "AMOUNT_1",
  AMOUNT_2 = "AMOUNT_2",
}

type RateSetPayload = {
  newRates: Rates;
};

type Currency1SetPayload = {
  newRates: Rates;
  currency1: string;
};

type Currency2SetPayload = {
  currency2: string;
};

type Amount1SetPayload = {
  amount1: string;
};

type Amount2SetPayload = {
  amount2: string;
};

type CurrencyStoreActionType = {
  type: CurrencyStoreActions;
  payload:
    | RateSetPayload
    | Currency1SetPayload
    | Currency2SetPayload
    | Amount1SetPayload
    | Amount2SetPayload;
};

function setRatesHandler(
  state: CurrencyState,
  payload: RateSetPayload
): CurrencyState {
  const newAmount2 = (
    parseFloat(state.amount1) * payload.newRates[state.currency2]
  ).toFixed(2);
  return {
    ...state,
    rates: payload.newRates,
    amount2: newAmount2,
  };
}

function setCurrency1ChangeHandler(
  state: CurrencyState,
  payload: Currency1SetPayload
): CurrencyState {
  const newAmount2 = (
    parseFloat(state.amount1) * payload.newRates[state.currency2]
  ).toFixed(2);

  return {
    ...state,
    rates: payload.newRates,
    currency1: payload.currency1,
    amount2: newAmount2,
  };
}

function setCurrency2ChangeHandler(
  state: CurrencyState,
  payload: Currency2SetPayload
): CurrencyState {
  const newAmount2 = (
    parseFloat(state.amount1) * state.rates[payload.currency2]
  ).toFixed(2);

  return {
    ...state,
    currency2: payload.currency2,
    amount2: newAmount2,
  };
}

function setAmount1ChangeHandler(
  state: CurrencyState,
  payload: Amount1SetPayload
): CurrencyState {
  let newAmount2 = "";
  if (payload.amount1 === "") newAmount2 = "0";
  else if (!isValidNumber(payload.amount1)) newAmount2 = "0";
  else {
    newAmount2 = (
      parseFloat(payload.amount1) * state.rates[state.currency2]
    ).toFixed(2);
  }
  return {
    ...state,
    amount1: payload.amount1,
    amount2: newAmount2,
  };
}

function setAmount2ChangeHandler(
  state: CurrencyState,
  payload: Amount2SetPayload
): CurrencyState {
  let newAmount1 = "";
  if (payload.amount2 === "") newAmount1 = "0";
  else if (!isValidNumber(payload.amount2)) newAmount1 = "0";
  else {
    newAmount1 = (
      parseFloat(payload.amount2) / state.rates[state.currency2]
    ).toFixed(2);
  }
  return {
    ...state,
    amount1: newAmount1,
    amount2: payload.amount2,
  };
}

export function currenciesReducer(
  state: CurrencyState,
  action: CurrencyStoreActionType
) {
  switch (action.type) {
    case CurrencyStoreActions.RATE:
      return setRatesHandler(state, action.payload as RateSetPayload);
    case CurrencyStoreActions.CURRENCY_1:
      return setCurrency1ChangeHandler(
        state,
        action.payload as Currency1SetPayload
      );
    case CurrencyStoreActions.CURRENCY_2:
      return setCurrency2ChangeHandler(
        state,
        action.payload as Currency2SetPayload
      );
    case CurrencyStoreActions.AMOUNT_1:
      return setAmount1ChangeHandler(
        state,
        action.payload as Amount1SetPayload
      );
    case CurrencyStoreActions.AMOUNT_2:
      return setAmount2ChangeHandler(
        state,
        action.payload as Amount2SetPayload
      );
    default:
      return state;
  }
}
