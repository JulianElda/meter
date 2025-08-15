import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { http, HttpResponse } from "msw";
import { initialize, mswLoader } from "msw-storybook-addon";
import { expect } from "storybook/test";

import { Currency } from "./currency";

initialize({ quiet: true });

const meta: Meta<typeof Currency> = {
  args: {
    initialAmount2: 113.09,
    initialCurrencies: [
      { label: "Euro", value: "EUR" },
      { label: "British Pound", value: "GBP" },
      { label: "Japanese Yen", value: "JPY" },
      { label: "United States Dollar", value: "USD" },
    ],
    initialRates: {
      GBP: 0.8427,
      JPY: 162.19,
      USD: 1.1309,
    },
  },
  component: Currency,
  decorators: [
    (Story) => (
      <div className="max-w-md text-lg">
        <Story />
      </div>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.frankfurter.app/currencies", () => {
          return HttpResponse.json({
            EUR: "Euro",
            GBP: "British Pound",
            JPY: "Japanese Yen",
            USD: "United States Dollar",
          });
        }),
        http.get("https://api.frankfurter.app/latest", ({ request }) => {
          const url = new URL(request.url);
          const from = url.searchParams.get("from") ?? "EUR";

          const ratesByCurrency: Record<string, Record<string, number>> = {
            EUR: { GBP: 0.8427, JPY: 162.19, USD: 1.1309 },
            GBP: { EUR: 1.1867, JPY: 192.46, USD: 1.342 },
            JPY: { EUR: 0.006_29, GBP: 0.005_41, USD: 0.006_88 },
            USD: { EUR: 0.884_25, GBP: 0.745_16, JPY: 143.42 },
          };

          return HttpResponse.json({
            amount: 1,
            base: from,
            date: "2025-05-22",
            rates: ratesByCurrency[from] ?? {},
          });
        }),
      ],
    },
  },
  title: "Tests/Currency",
};

export default meta;
type Story = StoryObj<typeof Currency>;

export const TestElements: Story = {
  name: "render elements",
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("base-amount")).toBeInTheDocument();
    await expect(canvas.getByTestId("base-currency")).toBeInTheDocument();
    await expect(canvas.getByTestId("target-amount")).toBeInTheDocument();
    await expect(canvas.getByTestId("target-currency")).toBeInTheDocument();

    await expect(canvas.getByTestId("base-amount")).toHaveValue(100);
    await expect(canvas.getByTestId("target-amount")).toHaveValue(113.09);
  },
};

export const BaseCurrencyChange: Story = {
  name: "convert target amount when base changes",
  play: async ({ canvas, userEvent }) => {
    // JPY -> USD
    await userEvent.selectOptions(canvas.getByTestId("base-currency"), "JPY");
    await userEvent.selectOptions(canvas.getByTestId("target-currency"), "USD");
    await expect(canvas.getByTestId("target-amount")).toHaveValue(0.688);

    // JPY -> EUR
    await userEvent.selectOptions(canvas.getByTestId("base-currency"), "JPY");
    await userEvent.selectOptions(canvas.getByTestId("target-currency"), "EUR");
    await expect(canvas.getByTestId("target-amount")).toHaveValue(0.629);

    // USD -> USD
    await userEvent.selectOptions(canvas.getByTestId("base-currency"), "USD");
    await userEvent.selectOptions(canvas.getByTestId("target-currency"), "USD");
    await expect(canvas.getByTestId("target-amount")).toHaveValue(100);
  },
};

export const BaseAmountChange: Story = {
  name: "convert target amount when base amount changes",
  play: async ({ canvas, userEvent }) => {
    // 10000 JPY -> 68.8 USD
    await userEvent.selectOptions(canvas.getByTestId("base-currency"), "JPY");
    await userEvent.clear(canvas.getByTestId("base-amount"));
    await userEvent.type(canvas.getByTestId("base-amount"), "10000");
    await expect(canvas.getByTestId("target-amount")).toHaveValue(68.8);
  },
};

export const TargetAmountChange: Story = {
  name: "convert base amount when target amount changes",
  play: async ({ canvas, userEvent }) => {
    // 100 USD -> 14534.884 USD
    await userEvent.selectOptions(canvas.getByTestId("base-currency"), "JPY");
    await userEvent.clear(canvas.getByTestId("target-amount"));
    await userEvent.type(canvas.getByTestId("target-amount"), "100");
    await expect(canvas.getByTestId("base-amount")).toHaveValue(14_534.884);
  },
};
