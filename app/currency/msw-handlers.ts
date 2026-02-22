import { http, HttpResponse } from "msw";

export const handlers = [
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
];
