import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Currency from "./currency";
import fetchCurrencies from "./fetch-currencies";
import fetchRates from "./fetch-rates";

describe("currency conversion", () => {
  test("initial rate", () => {
    render(<Currency />);
  });
});
