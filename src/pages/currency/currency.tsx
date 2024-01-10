import {
  Card,
  InputField,
  InputLabel,
  SelectField,
} from "@julianelda/scratchpad";
import { useState } from "react";
import type { Currency, Rates } from "./currency-resolver";
import { isValidNumber } from "src/util/common";

type CurrencyProps = {
  currencies: Currency[];
  rates: Rates;
};

export default function Currency(props: CurrencyProps) {
  const [currency1, setCurrency1] = useState("EUR");
  const [currency2, setCurrency2] = useState("USD");
  const [amount1, setAmount1] = useState("1");
  const [amount2, setAmount2] = useState(
    (parseInt(amount1) * props.rates[currency2]).toFixed(2)
  );

  const onChangeAmount1 = (value: string) => {
    if (amount1 === "") setAmount1("0");
    if (!isValidNumber(value)) setAmount1("0");
    setAmount1(value);
    const tmp = (parseInt(value) * props.rates[currency2]).toFixed(2);
    setAmount2(isValidNumber(tmp) ? tmp : "0");
  };

  const onChangeAmount2 = (value: string) => {
    if (amount2 === "") setAmount2("0");
    if (!isValidNumber(value)) setAmount2("0");
    setAmount2(value);
    const tmp = (parseInt(value) / props.rates[currency2]).toFixed(2);
    setAmount1(isValidNumber(tmp) ? tmp : "0");
  };

  const onChangeCurrency1 = (value: string) => {
    setCurrency1(value);
    const tmp = (parseInt(value) * props.rates[currency2]).toFixed(2);
    setAmount2(isValidNumber(tmp) ? tmp : "0");
  };

  const onChangeCurrency2 = (value: string) => {
    setCurrency2(value);
    const tmp = (parseInt(value) * props.rates[currency2]).toFixed(2);
    setAmount2(isValidNumber(tmp) ? tmp : "0");
  };

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
              options={props.currencies}
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
              options={props.currencies}
              onChange={onChangeCurrency2}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
