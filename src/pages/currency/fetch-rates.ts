export default async function fetchRates(
  currency: string
): Promise<Record<string, number>> {
  return fetch("https://api.frankfurter.app/latest?from=" + currency)
    .then((result) => result.json())
    .then((result) => result.rates);
}
