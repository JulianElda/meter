import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore, RootState } from "./store";

type ReduxProviderProps = {
  children: ReactNode;
  preloadedState?: RootState;
};

export function ReduxProvider({
  children,
  preloadedState,
}: ReduxProviderProps) {
  return <Provider store={createStore(preloadedState)}>{children}</Provider>;
}
