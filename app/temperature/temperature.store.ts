import { Temperatures } from "@/src/constants/temperature";
import { toFixedRounding } from "@/src/util/common";
import { convertTemperature } from "@/src/util/conversion";

interface TemperatureState {
  celcius: number;
  fahrenheit: number;
  kelvin: number;
}

export const initialTemperatureState: TemperatureState = {
  celcius: 100,
  fahrenheit: toFixedRounding(
    convertTemperature(100, Temperatures.C, Temperatures.F)
  ),
  kelvin: toFixedRounding(
    convertTemperature(100, Temperatures.C, Temperatures.K)
  ),
};

export enum TemperatureStoreActions {
  celcius,
  fahrenheit,
  kelvin,
}

interface TemperatureStoreActionType {
  payload: number;
  type: TemperatureStoreActions;
}

export function temperatureReducer(
  state: TemperatureState,
  action: TemperatureStoreActionType
) {
  switch (action.type) {
    case TemperatureStoreActions.celcius: {
      return setCelciusHandler(action.payload);
    }
    case TemperatureStoreActions.fahrenheit: {
      return setFahrenheitHandler(action.payload);
    }
    case TemperatureStoreActions.kelvin: {
      return setKelvinHandler(action.payload);
    }
    default: {
      return state;
    }
  }
}

function setCelciusHandler(payload: number): TemperatureState {
  return {
    celcius: payload,
    fahrenheit: toFixedRounding(
      convertTemperature(payload, Temperatures.C, Temperatures.F)
    ),
    kelvin: toFixedRounding(
      convertTemperature(payload, Temperatures.C, Temperatures.K)
    ),
  };
}

function setFahrenheitHandler(payload: number): TemperatureState {
  return {
    celcius: toFixedRounding(
      convertTemperature(payload, Temperatures.F, Temperatures.C)
    ),
    fahrenheit: payload,
    kelvin: toFixedRounding(
      convertTemperature(payload, Temperatures.F, Temperatures.K)
    ),
  };
}

function setKelvinHandler(payload: number): TemperatureState {
  return {
    celcius: toFixedRounding(
      convertTemperature(payload, Temperatures.K, Temperatures.C)
    ),
    fahrenheit: toFixedRounding(
      convertTemperature(payload, Temperatures.K, Temperatures.F)
    ),
    kelvin: payload,
  };
}
