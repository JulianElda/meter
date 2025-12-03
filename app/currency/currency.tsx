"use client";

import { Card, InputSelect } from "@julianelda/scratchpad";
import { useReducer } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";

import type { Currency, Rates } from "./currency.store";

import {
  currenciesReducer,
  CurrencyStoreActions,
  getCurrencyRate,
  initialCurrencyState,
} from "./currency.store";

interface CurrencyProps {
  initialAmount2: number;
  initialCurrencies: Currency[];
  initialRates: Rates;
}

export function Currency(props: CurrencyProps) {
  const currencies = props.initialCurrencies;

  const [state, dispatch] = useReducer(currenciesReducer, {
    ...initialCurrencyState,
    amount2: props.initialAmount2,
    rates: props.initialRates,
  });

  const onChangeCurrency1 = (newCurrency1: string) => {
    dispatch({
      payload: newCurrency1,
      type: CurrencyStoreActions.CURRENCY_1,
    });

    void getCurrencyRate(newCurrency1).then((result: Rates) => {
      dispatch({
        payload: result,
        type: CurrencyStoreActions.RATE,
      });
    });
  };

  const onChangeCurrency2 = (newCurrency2: string) => {
    dispatch({
      payload: newCurrency2,
      type: CurrencyStoreActions.CURRENCY_2,
    });
  };

  const onChangeAmount1 = (newAmount1: number) => {
    dispatch({
      payload: newAmount1,
      type: CurrencyStoreActions.AMOUNT_1,
    });
  };

  const onChangeAmount2 = (newAmount2: number) => {
    dispatch({
      payload: newAmount2,
      type: CurrencyStoreActions.AMOUNT_2,
    });
  };

  return (
    <>
      <div>
        <PageHeader title="Currency conversion" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSelect
            hideLabel={true}
            inputId="base-amount"
            inputLabel="Amount"
            inputValue={state.amount1}
            onInputChange={onChangeAmount1 as (value: number | string) => void}
            onSelectChange={onChangeCurrency1}
            options={currencies}
            selectId="base-currency"
            selectLabel="Base currency"
            selectValue={state.currency1}
            type="number"
          />
          <InputSelect
            hideLabel={true}
            inputId="target-amount"
            inputLabel="Amount"
            inputValue={state.amount2}
            onInputChange={onChangeAmount2 as (value: number | string) => void}
            onSelectChange={onChangeCurrency2}
            options={currencies}
            selectId="target-currency"
            selectLabel="Base currency"
            selectValue={state.currency2}
            type="number"
          />
        </div>
      </Card>
    </>
  );
}
