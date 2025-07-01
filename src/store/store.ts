import { combineReducers, configureStore } from "@reduxjs/toolkit";

import notificationReducer from "./notification/notification.slice";

const rootReducer = combineReducers({
  notification: notificationReducer,
});

export type AppDispatch = RootStore["dispatch"];

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = ReturnType<typeof createStore>;
export function createStore(preloadedState?: RootState) {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
  });
}
