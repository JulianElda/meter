import { PageHeader } from "@/src/components/PageHeader";
import { Card, InputSelect } from "@julianelda/scratchpad";
import { useEffect, useReducer, useState } from "react";
import {
  CurrencyStoreActions,
  Rates,
  currenciesReducer,
  initialCurrencyState,
} from "./Currency.store";

export function Currency() {
  const [currencies, setCurrencies] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const [state, dispatch] = useReducer(currenciesReducer, initialCurrencyState);

  const onChangeCurrency1 = async (newCurrency1: string) => {
    const newRates: Rates = await fetch(
      "https://api.frankfurter.app/latest?from=" + newCurrency1
    )
      .then((result) => result.json())
      .then((result) => result.rates);
    dispatch({
      type: CurrencyStoreActions.CURRENCY_1,
      payload: {
        newRates: newRates,
        currency1: newCurrency1,
      },
    });
  };

  const onChangeCurrency2 = (newCurrency2: string) => {
    dispatch({
      type: CurrencyStoreActions.CURRENCY_2,
      payload: {
        currency2: newCurrency2,
      },
    });
  };

  const onChangeAmount1 = (newAmount1: number) => {
    dispatch({
      type: CurrencyStoreActions.AMOUNT_1,
      payload: {
        amount1: newAmount1,
      },
    });
  };

  const onChangeAmount2 = (newAmount2: number) => {
    dispatch({
      type: CurrencyStoreActions.AMOUNT_2,
      payload: {
        amount2: newAmount2,
      },
    });
  };

  useEffect(() => {
    if (currencies.length === 0)
      fetch("https://api.frankfurter.app/currencies")
        .then((result) => result.json())
        .then((result) =>
          Object.entries(result).map((currencyArray) => ({
            value: currencyArray[0],
            label: currencyArray[1] as string,
          }))
        )
        .then((result) => {
          setCurrencies(result);
        });
  }, [currencies]);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?from=" + state.currency1)
      .then((result) => result.json())
      .then((result) => result.rates)
      .then((result: Rates) => {
        dispatch({
          type: CurrencyStoreActions.RATE,
          payload: {
            newRates: result,
          },
        });
      });
  }, [state.currency1]);

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
