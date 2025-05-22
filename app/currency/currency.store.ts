import { toFixedRounding } from "@/src/util/common";

export type Rates = Record<string, number>;

export const initialCurrency1 = "EUR";
export const initialCurrency2 = "USD";
export const initialAmount1 = 100;

type CurrencyState = {
  rates: Rates;
  currency1: string;
  currency2: string;
  amount1: number;
  amount2: number;
};

export type Currency = {
  value: string;
  label: string;
};

export const initialCurrencyState: CurrencyState = {
  rates: {},
  currency1: initialCurrency1,
  currency2: initialCurrency2,
  amount1: initialAmount1,
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
  const newAmount2 = toFixedRounding(
    state.amount1 * (payload[state.currency2] ?? 1)
  );
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
  const newAmount2 = toFixedRounding(
    state.amount1 * (state.rates[payload] ?? 1)
  );

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
    newAmount2 = toFixedRounding(payload * (state.rates[state.currency2] ?? 1));
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
    newAmount1 = toFixedRounding(payload / (state.rates[state.currency2] ?? 1));
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

export async function getCurrencies(): Promise<Currency[]> {
  return fetch("https://api.frankfurter.app/currencies")
    .then((result) => result.json())
    .then((result) =>
      Object.entries(result).map((currencyArray) => ({
        value: currencyArray[0],
        label: currencyArray[1] as string,
      }))
    );
}

export async function getCurrencyRate(
  currency: string = initialCurrency1
): Promise<Rates> {
  return fetch("https://api.frankfurter.app/latest?from=" + currency)
    .then((result) => result.json())
    .then((result) => result.rates);
}
