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
  EUR: "Euro",
  GBP: "British Pound",
  JPY: "Japanese Yen",
  USD: "United States Dollar",
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
      GBP: 0.86023,
      JPY: 159.03,
      USD: 1.0946,
    },
  },
  JPY: {
    amount: 1.0,
    base: "JPY",
    date: "2024-01-10",
    rates: {
      EUR: 0.00629,
      GBP: 0.00541,
      USD: 0.00688,
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
      expectValue(AMOUNT1, "100");
      expectValue(AMOUNT2, "109.46");
    });
  });

  test("render and type amount 1", async () => {
    render(<Currency />);
    const user = userEvent.setup();
    clearInput(user, AMOUNT1);
    await typeInput(user, AMOUNT1, "200");
    expectValue(AMOUNT2, "218.92");
  });

  test("render and change currency 1", async () => {
    render(<Currency />);
    const user = userEvent.setup();
    await waitFor(() => {
      expect(screen.getByDisplayValue("109.46")).toBeDefined();
    });
    await selectOption(user, CURRENCY1, "JPY");
    clearInput(user, AMOUNT1);
    await typeInput(user, AMOUNT1, "10000");
    expectValue(AMOUNT2, "68.80");
  });
});

describe("change target currency", () => {
  test("change amount 2", async () => {
    render(<Currency />);
    const user = userEvent.setup();
    await waitFor(() => {
      expect(screen.getByDisplayValue("109.46")).toBeDefined();
    });
    clearInput(user, AMOUNT2);
    await typeInput(user, AMOUNT2, "100");
    expectValue(AMOUNT1, "91.36");
  });

  test("change currency 2", async () => {
    render(<Currency />);
    const user = userEvent.setup();
    await waitFor(() => {
      expect(screen.getByDisplayValue("109.46")).toBeDefined();
    });
    await selectOption(user, CURRENCY2, "JPY");
    expectValue(AMOUNT2, "15903.00");
    clearInput(user, AMOUNT1);
    await typeInput(user, AMOUNT1, "100");
    expectValue(AMOUNT2, "15903.00");
  });
});
