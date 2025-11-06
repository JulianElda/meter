import type { Metadata } from "next";

import { toFixedRounding } from "@/src/util/common";

import { Currency } from "./currency";
import {
  getCurrencies,
  getCurrencyRate,
  initialAmount1,
  initialCurrency1,
  initialCurrency2,
} from "./currency.store";

export const metadata: Metadata = {
  description: "Convert currencies online",
  title: "Currency conversion - meter",
};

export default async function CurrencyPage() {
  const initialCurrencies = await getCurrencies();
  const initialRates = await getCurrencyRate(initialCurrency1);

  return (
    <Currency
      initialAmount2={toFixedRounding(
        initialAmount1 * initialRates[initialCurrency2]
      )}
      initialCurrencies={initialCurrencies}
      initialRates={initialRates}
    />
  );
}
