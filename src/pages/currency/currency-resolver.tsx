import Currency from "./currency";
import { useEffect, useState } from "react";

export type Currency = {
  value: string;
  label: string;
};
export type Rates = Record<string, number>;

export default function CurrencyResolver() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [rates, setRates] = useState<Rates>({});
  const [currenciesLoaded, setCurrenciesLoaded] = useState(false);
  const [ratesLoaded, setRatesLoaded] = useState(false);

  useEffect(() => {
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
        setCurrenciesLoaded(true);
      });

    fetch("https://api.frankfurter.app/latest")
      .then((result) => result.json())
      .then((result) => result.rates)
      .then((result) => {
        setRates(result);
        setRatesLoaded(true);
      });
  }, []);

  return (
    <>
      {ratesLoaded && currenciesLoaded ? (
        <Currency
          currencies={currencies}
          rates={rates}
        />
      ) : (
        <></>
      )}
    </>
  );
}
