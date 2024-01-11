import { screen } from "@testing-library/dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import {
  clearInput,
  expectValue,
  selectOption,
  typeInput,
} from "src/tests.helper";
import Currency from "./currency";

const currencies = {
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Renminbi Yuan",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  EUR: "Euro",
  GBP: "British Pound",
  HKD: "Hong Kong Dollar",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  ISK: "Icelandic Króna",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Złoty",
  RON: "Romanian Leu",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  USD: "United States Dollar",
  ZAR: "South African Rand",
};

const rates: Record<
  string,
  { amount: number; base: string; date: string; rates: Record<string, number> }
> = {
  EUR: {
    amount: 1.0,
    base: "EUR",
    date: "2024-01-10",
    rates: {
      AUD: 1.6334,
      BGN: 1.9558,
      BRL: 5.3508,
      CAD: 1.4649,
      CHF: 0.9336,
      CNY: 7.8476,
      CZK: 24.562,
      DKK: 7.4582,
      GBP: 0.86023,
      HKD: 8.5602,
      HUF: 378.35,
      IDR: 17032,
      ILS: 4.1184,
      INR: 90.88,
      ISK: 150.1,
      JPY: 159.03,
      KRW: 1443.77,
      MXN: 18.5983,
      MYR: 5.0806,
      NOK: 11.2915,
      NZD: 1.7567,
      PHP: 61.593,
      PLN: 4.341,
      RON: 4.9728,
      SEK: 11.197,
      SGD: 1.4573,
      THB: 38.338,
      TRY: 32.809,
      USD: 1.0946,
      ZAR: 20.414,
    },
  },
  JPY: {
    amount: 1.0,
    base: "JPY",
    date: "2024-01-10",
    rates: {
      AUD: 0.01027,
      BGN: 0.0123,
      BRL: 0.03365,
      CAD: 0.00921,
      CHF: 0.00587,
      CNY: 0.04935,
      CZK: 0.15445,
      DKK: 0.0469,
      EUR: 0.00629,
      GBP: 0.00541,
      HKD: 0.05383,
      HUF: 2.3791,
      IDR: 107.1,
      ILS: 0.0259,
      INR: 0.57146,
      ISK: 0.94385,
      KRW: 9.0786,
      MXN: 0.11695,
      MYR: 0.03195,
      NOK: 0.071,
      NZD: 0.01105,
      PHP: 0.3873,
      PLN: 0.0273,
      RON: 0.03127,
      SEK: 0.07041,
      SGD: 0.00916,
      THB: 0.24107,
      TRY: 0.20631,
      USD: 0.00688,
      ZAR: 0.12837,
    },
  },
};

const restHandlers = [
  http.get("https://api.frankfurter.app/currencies", () => {
    return HttpResponse.json(currencies);
  }),

  http.get("https://api.frankfurter.app/latest", ({ request }) => {
    const url = new URL(request.url);
    const currency = url.searchParams.get("from")! || "EUR";
    return HttpResponse.json(rates[currency]);
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

const AMOUNT1 = "base-amount";
const AMOUNT2 = "target-amount";
const CURRENCY1 = "base-currency";
const CURRENCY2 = "target-currency";

describe("initial currency conversion", () => {
  test("show initial rates", () => {
    render(<Currency />);
    waitFor(() => {
      expectValue(AMOUNT1, "1");
      expectValue(AMOUNT2, "1.09");
    });
  });

  test("render and type amount 1", async () => {
    render(<Currency />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1);
    await typeInput(user, AMOUNT1, "100");
    expectValue(AMOUNT2, "109.46");
  });

  test.skip("render and change currency 1", async () => {
    render(<Currency />);
    const user = userEvent.setup();
    screen.debug();
    await waitFor(() => {
      selectOption(user, CURRENCY1, "JPY");
    });
  });
});
