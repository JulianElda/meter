import { toFixedRounding } from "@/src/util/common";

export type Rates = Record<string, number>;

export const initialCurrency1 = "EUR";
export const initialCurrency2 = "USD";
export const initialAmount1 = 100;

export interface Currency {
  label: string;
  value: string;
}

interface CurrencyState {
  amount1: number;
  amount2: number;
  currency1: string;
  currency2: string;
  rates: Rates;
}

export const initialCurrencyState: CurrencyState = {
  amount1: initialAmount1,
  amount2: 0,
  currency1: initialCurrency1,
  currency2: initialCurrency2,
  rates: {},
};

export enum CurrencyStoreActions {
  RATE,
  CURRENCY_1,
  CURRENCY_2,
  AMOUNT_1,
  AMOUNT_2,
}

interface CurrencyStoreActionType {
  payload: number | Rates | string;
  type: CurrencyStoreActions;
}

export function currenciesReducer(
  state: CurrencyState,
  action: CurrencyStoreActionType
) {
  switch (action.type) {
    case CurrencyStoreActions.AMOUNT_1: {
      return setAmount1ChangeHandler(state, action.payload as number);
    }
    case CurrencyStoreActions.AMOUNT_2: {
      return setAmount2ChangeHandler(state, action.payload as number);
    }
    case CurrencyStoreActions.CURRENCY_1: {
      return setCurrency1ChangeHandler(state, action.payload as string);
    }
    case CurrencyStoreActions.CURRENCY_2: {
      return setCurrency2ChangeHandler(state, action.payload as string);
    }
    case CurrencyStoreActions.RATE: {
      return setRatesHandler(state, action.payload as Rates);
    }
    default: {
      return state;
    }
  }
}

export async function getCurrencies(): Promise<Currency[]> {
  return fetch("https://api.frankfurter.app/currencies")
    .then((result) => result.json())
    .then((result) =>
      Object.entries(result).map((currencyArray) => ({
        label: currencyArray[1] as string,
        value: currencyArray[0],
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

function setAmount1ChangeHandler(
  state: CurrencyState,
  payload: number
): CurrencyState {
  let newAmount2 = 0;
  newAmount2 = payload
    ? toFixedRounding(payload * (state.rates[state.currency2] ?? 1))
    : 0;
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
  newAmount1 = payload
    ? toFixedRounding(payload / (state.rates[state.currency2] ?? 1))
    : 0;
  return {
    ...state,
    amount1: newAmount1,
    amount2: payload,
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
    amount2: newAmount2,
    currency2: payload,
  };
}

function setRatesHandler(state: CurrencyState, payload: Rates): CurrencyState {
  const newAmount2 = toFixedRounding(
    state.amount1 * (payload[state.currency2] ?? 1)
  );
  return {
    ...state,
    amount2: newAmount2,
    rates: payload,
  };
}
