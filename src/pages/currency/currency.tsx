import {
  Card,
  InputField,
  InputLabel,
  SelectField,
} from "@julianelda/scratchpad";
import { useCallback, useEffect, useState } from "react";
import { isValidNumber } from "src/util/common";

type Currency = {
  value: string;
  label: string;
};
type Rates = Record<string, number>;

export default function Currency() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [rates, setRates] = useState<Rates>({});
  const [currency1, setCurrency1] = useState("EUR");
  const [currency2, setCurrency2] = useState("USD");
  const [amount1, setAmount1] = useState("1");
  const [amount2, setAmount2] = useState("");

  const convert12 = useCallback(
    (value1: string): string => {
      const currentRate = rates[currency2] || 1;
      const tmp = (parseInt(value1) * currentRate).toFixed(2);
      return isValidNumber(tmp) ? tmp : "0";
    },
    [currency2, rates]
  );

  const convert21 = useCallback(
    (value2: string): string => {
      const currentRate = rates[currency2] || 1;
      const tmp = (parseInt(value2) / currentRate).toFixed(2);
      return isValidNumber(tmp) ? tmp : "0";
    },
    [currency2, rates]
  );

  const onChangeAmount1 = (newAmount1: string) => {
    if (newAmount1 === "") setAmount1("0");
    if (!isValidNumber(newAmount1)) setAmount1("0");
    setAmount1(newAmount1);
    setAmount2(convert12(newAmount1));
  };

  const onChangeAmount2 = (newAmount2: string) => {
    if (newAmount2 === "") setAmount2("0");
    if (!isValidNumber(newAmount2)) setAmount2("0");
    setAmount2(newAmount2);
    setAmount1(convert21(newAmount2));
  };

  const onChangeCurrency1 = (newCurrency1: string) => {
    return fetch("https://api.frankfurter.app/latest?from=" + currency1)
      .then((result) => result.json())
      .then((result) => result.rates)
      .then((result) => {
        setRates(result);
        setCurrency1(newCurrency1);
        setAmount2(convert12(newCurrency1));
      });
  };

  const onChangeCurrency2 = (value: string) => {
    setCurrency2(value);
    setAmount2(convert12(value));
  };

  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((result) => result.json())
      .then((result) =>
        Object.entries(result).map((currencyArray) => ({
          value: currencyArray[0],
          label: currencyArray[1] as string,
        }))
      )
      .then((result) => {
        setCurrencies(result);
      });
  }, []);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?from=" + currency1)
      .then((result) => result.json())
      .then((result) => result.rates)
      .then((result) => {
        setRates(result);
      });
  }, [currency1]);

  useEffect(() => {
    setAmount2(convert12(amount1));
  }, [amount1, convert12]);

  return (
    <Card>
      <div className="my-2">
        <InputLabel
          id="base-amount"
          label="Amount"
          hideLabel={true}
        />
        <div className="relative rounded-md shadow-sm">
          <InputField
            id="base-amount"
            type="text"
            value={amount1}
            onChange={onChangeAmount1}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <SelectField
              id="base-currency"
              value={currency1}
              options={currencies}
              onChange={onChangeCurrency1}
            />
          </div>
        </div>
      </div>

      <div>
        <InputLabel
          id="target-amount"
          label="Amount"
          hideLabel={true}
        />
        <div className="relative rounded-md shadow-sm">
          <InputField
            id="target-amount"
            type="text"
            value={amount2}
            onChange={onChangeAmount2}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <SelectField
              id="target-currency"
              value={currency2}
              options={currencies}
              onChange={onChangeCurrency2}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
