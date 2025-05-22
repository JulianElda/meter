import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./notification/notification.slice";

const rootReducer = combineReducers({
  notification: notificationReducer,
});

export function createStore(preloadedState?: RootState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = ReturnType<typeof createStore>;
export type AppDispatch = RootStore["dispatch"];
