import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { Currency } from "./currency";
import { worker } from "./msw-setup";

beforeAll(() => worker.start());
afterEach(() => worker.resetHandlers());
afterAll(() => worker.stop());

const initialAmount2 = 113.09;

const initialCurrencies = [
  { label: "Euro", value: "EUR" },
  { label: "British Pound", value: "GBP" },
  { label: "Japanese Yen", value: "JPY" },
  { label: "United States Dollar", value: "USD" },
];

const initialRates = {
  GBP: 0.8427,
  JPY: 162.19,
  USD: 1.1309,
};

test("render elements", async () => {
  const { getByTestId } = await render(
    <Currency
      initialAmount2={initialAmount2}
      initialCurrencies={initialCurrencies}
      initialRates={initialRates}
    />,
  );

  await expect.element(getByTestId("base-amount")).toBeInTheDocument();
  await expect.element(getByTestId("base-currency")).toBeInTheDocument();
  await expect.element(getByTestId("target-amount")).toBeInTheDocument();
  await expect.element(getByTestId("target-currency")).toBeInTheDocument();

  await expect.element(getByTestId("base-amount")).toHaveValue(100);
  await expect.element(getByTestId("target-amount")).toHaveValue(113.09);
});

test("convert target amount when base changes", async () => {
  const { getByTestId } = await render(
    <Currency
      initialAmount2={initialAmount2}
      initialCurrencies={initialCurrencies}
      initialRates={initialRates}
    />,
  );

  // JPY -> USD
  await getByTestId("base-currency").selectOptions("JPY");
  await getByTestId("target-currency").selectOptions("USD");
  await expect.element(getByTestId("target-amount")).toHaveValue(0.688);

  // JPY -> EUR
  await getByTestId("base-currency").selectOptions("JPY");
  await getByTestId("target-currency").selectOptions("EUR");
  await expect.element(getByTestId("target-amount")).toHaveValue(0.629);

  // USD -> USD
  await getByTestId("base-currency").selectOptions("USD");
  await getByTestId("target-currency").selectOptions("USD");
  await expect.element(getByTestId("target-amount")).toHaveValue(100);
});

test("convert target amount when base amount changes", async () => {
  const { getByTestId } = await render(
    <Currency
      initialAmount2={initialAmount2}
      initialCurrencies={initialCurrencies}
      initialRates={initialRates}
    />,
  );

  // 10000 JPY -> 68.8 USD
  await getByTestId("base-currency").selectOptions("JPY");
  await getByTestId("base-amount").clear();
  await getByTestId("base-amount").fill("10000");
  await expect.element(getByTestId("target-amount")).toHaveValue(68.8);
});

test("convert base amount when target amount changes", async () => {
  const { getByTestId } = await render(
    <Currency
      initialAmount2={initialAmount2}
      initialCurrencies={initialCurrencies}
      initialRates={initialRates}
    />,
  );

  // 100 USD -> 14534.884 JPY
  await getByTestId("base-currency").selectOptions("JPY");
  await getByTestId("target-amount").clear();
  await getByTestId("target-amount").fill("100");
  await expect.element(getByTestId("base-amount")).toHaveValue(14_534.884);
});
