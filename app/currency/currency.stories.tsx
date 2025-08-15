import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { http, HttpResponse } from "msw";
import { initialize, mswLoader } from "msw-storybook-addon";

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
  title: "Utilities",
};

export default meta;
type Story = StoryObj<typeof Currency>;

export const CurrencyPage: Story = {
  name: "Currency converter",
};
