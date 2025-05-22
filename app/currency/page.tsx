import { toFixedRounding } from "@/src/util/common";
import type { Metadata } from "next";
import { Currency } from "./currency";
import {
  getCurrencies,
  getCurrencyRate,
  initialAmount1,
  initialCurrency1,
  initialCurrency2,
} from "./currency.store";

export default async function CurrencyPage() {
  const initialCurrencies = await getCurrencies();
  const initialRates = await getCurrencyRate(initialCurrency1);

  return (
    <Currency
      initialCurrencies={initialCurrencies}
      initialRates={initialRates}
      initialAmount2={toFixedRounding(
        initialAmount1 * initialRates[initialCurrency2]
      )}
    />
  );
}

export const metadata: Metadata = {
  title: "Currency conversion - meter",
  description: "Convert currencies online",
};
