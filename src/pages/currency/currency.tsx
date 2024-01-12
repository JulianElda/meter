import {
  Card,
  InputField,
  InputLabel,
  SelectField,
} from "@julianelda/scratchpad";
import { useEffect, useReducer, useState } from "react";
import {
  initialCurrencyState,
  currenciesReducer,
  CurrencyStoreActions,
} from "./currency.store";

export default function Currency() {
  const [currencies, setCurrencies] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const [state, dispatch] = useReducer(currenciesReducer, initialCurrencyState);

  const onChangeCurrency1 = async (newCurrency1: string) => {
    const newRates = await fetch(
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

  const onChangeAmount1 = (newAmount1: string) => {
    dispatch({
      type: CurrencyStoreActions.AMOUNT_1,
      payload: {
        amount1: newAmount1,
      },
    });
  };

  const onChangeAmount2 = (newAmount2: string) => {
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
      .then((result: Record<string, number>) => {
        dispatch({
          type: CurrencyStoreActions.RATE,
          payload: {
            newRates: result,
          },
        });
      });
  }, [state.currency1]);

  return (
    <Card>
      <div className="my-2">
        <InputLabel
          id="base-amount"
          label="Amount"
          hideLabel={true}
        />
        <div className="relative rounded-md shadow-sm">
          <InputField
            id="base-amount"
            type="text"
            value={state.amount1}
            onChange={onChangeAmount1}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <SelectField
              id="base-currency"
              value={state.currency1}
              options={currencies}
              onChange={onChangeCurrency1}
            />
          </div>
        </div>
      </div>

      <div>
        <InputLabel
          id="target-amount"
          label="Amount"
          hideLabel={true}
        />
        <div className="relative rounded-md shadow-sm">
          <InputField
            id="target-amount"
            type="text"
            value={state.amount2}
            onChange={onChangeAmount2}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <SelectField
              id="target-currency"
              value={state.currency2}
              options={currencies}
              onChange={onChangeCurrency2}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
