import type { ReactNode } from "react";

import { Provider } from "react-redux";

import type { RootState } from "./store";

import { createStore } from "./store";

interface ReduxProviderProps {
  children: ReactNode;
  preloadedState?: RootState;
}

export function ReduxProvider({
  children,
  preloadedState,
}: ReduxProviderProps) {
  return <Provider store={createStore(preloadedState)}>{children}</Provider>;
}
