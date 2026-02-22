import { F_C, K_C, Temperatures } from "@/src/constants/temperature";

export const convertTemperature = function (
  amount: number,
  unitsFrom: Temperatures,
  unitsTo: Temperatures,
): number {
  // Celcius is baseline
  let celciusAmount: number;
  switch (unitsFrom) {
    case Temperatures.C: {
      celciusAmount = amount;
      break;
    }
    case Temperatures.F: {
      celciusAmount = (amount - F_C) * (5 / 9);
      break;
    }
    case Temperatures.K: {
      celciusAmount = amount - K_C;
      break;
    }
  }

  let result: number;
  switch (unitsTo) {
    case Temperatures.C: {
      result = celciusAmount;
      break;
    }
    case Temperatures.F: {
      result = celciusAmount * (9 / 5) + F_C;
      break;
    }
    case Temperatures.K: {
      result = celciusAmount + K_C;
      break;
    }
  }

  return result;
};
