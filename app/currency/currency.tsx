"use client";

import { PageHeader } from "@/src/components/page-header";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useReducer } from "react";
import type { Currency, Rates } from "./currency.store";
import {
  CurrencyStoreActions,
  currenciesReducer,
  getCurrencyRate,
  initialCurrencyState,
} from "./currency.store";

type CurrencyProps = {
  initialCurrencies: Currency[];
  initialRates: Rates;
  initialAmount2: number;
};

export function Currency(props: CurrencyProps) {
  const currencies = props.initialCurrencies;

  const [state, dispatch] = useReducer(currenciesReducer, {
    ...initialCurrencyState,
    rates: props.initialRates,
    amount2: props.initialAmount2,
  });

  const onChangeCurrency1 = (newCurrency1: string) => {
    dispatch({
      type: CurrencyStoreActions.CURRENCY_1,
      payload: newCurrency1,
    });

    getCurrencyRate(newCurrency1).then((result: Rates) => {
      dispatch({
        type: CurrencyStoreActions.RATE,
        payload: result,
      });
    });
  };

  const onChangeCurrency2 = (newCurrency2: string) => {
    dispatch({
      type: CurrencyStoreActions.CURRENCY_2,
      payload: newCurrency2,
    });
  };

  const onChangeAmount1 = (newAmount1: number) => {
    dispatch({
      type: CurrencyStoreActions.AMOUNT_1,
      payload: newAmount1,
    });
  };

  const onChangeAmount2 = (newAmount2: number) => {
    dispatch({
      type: CurrencyStoreActions.AMOUNT_2,
      payload: newAmount2,
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
            type="number"
            inputId="base-amount"
            selectId="base-currency"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Base currency"
            inputValue={state.amount1}
            onInputChange={onChangeAmount1 as (value: string | number) => void}
            options={currencies}
            selectValue={state.currency1}
            onSelectChange={onChangeCurrency1}
          />
          <InputSelect
            type="number"
            inputId="target-amount"
            selectId="target-currency"
            hideLabel={true}
            inputLabel="Amount"
            selectLabel="Base currency"
            inputValue={state.amount2}
            onInputChange={onChangeAmount2 as (value: string | number) => void}
            options={currencies}
            selectValue={state.currency2}
            onSelectChange={onChangeCurrency2}
          />
        </div>
      </Card>
    </>
  );
}
