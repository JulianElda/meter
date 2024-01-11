export default async function fetchCurrencies(): Promise<
  {
    value: string;
    label: string;
  }[]
> {
  return fetch("https://api.frankfurter.app/currencies")
    .then((result) => result.json())
    .then((result) =>
      Object.entries(result).map((currencyArray) => ({
        value: currencyArray[0],
        label: currencyArray[1] as string,
      }))
    );
}
