import { screen } from "@testing-library/dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { Currency } from "./Currency";

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
      expect(screen.getByTestId(AMOUNT1)).toHaveValue(100);
      expect(screen.getByTestId(AMOUNT2)).toHaveValue(109.46);
    });
  });

  test("render and type amount 1", async () => {
    const user = userEvent.setup();
    render(<Currency />);

    await user.clear(screen.getByTestId(AMOUNT1));
    await user.type(screen.getByTestId(AMOUNT1), "200");
    expect(screen.getByTestId(AMOUNT2)).toHaveValue(218.92);
  });

  test("render and change currency 1", async () => {
    const user = userEvent.setup();
    render(<Currency />);
    await waitFor(() => {
      expect(screen.getByDisplayValue("109.46")).toBeDefined();
    });

    await user.selectOptions(screen.getByTestId(CURRENCY1), "JPY");
    await user.clear(screen.getByTestId(AMOUNT1));
    await user.type(screen.getByTestId(AMOUNT1), "10000");

    expect(screen.getByTestId(AMOUNT2)).toHaveValue(68.8);
  });
});

describe("change target currency", () => {
  test("change amount 2", async () => {
    const user = userEvent.setup();
    render(<Currency />);
    await waitFor(() => {
      expect(screen.getByDisplayValue("109.46")).toBeDefined();
    });

    await user.clear(screen.getByTestId(AMOUNT2));
    await user.type(screen.getByTestId(AMOUNT2), "100");

    expect(screen.getByTestId(AMOUNT1)).toHaveValue(91.358);
  });

  test("change currency 2", async () => {
    const user = userEvent.setup();
    render(<Currency />);
    await waitFor(() => {
      expect(screen.getByDisplayValue("109.46")).toBeDefined();
    });

    await user.selectOptions(screen.getByTestId(CURRENCY2), "JPY");
    expect(screen.getByTestId(AMOUNT2)).toHaveValue(15903);

    await user.clear(screen.getByTestId(AMOUNT1));
    await user.type(screen.getByTestId(AMOUNT1), "100");

    expect(screen.getByTestId(AMOUNT2)).toHaveValue(15903);
  });
});
