import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import type { Notification } from "@/src/components/notifications/notifications.type";
import type { RootState } from "@/src/store/store";

interface NotificationState {
  items: Notification[];
}

const initialState: NotificationState = {
  items: [],
};

export const notificationSlice = createSlice({
  initialState,
  name: "notification",
  reducers: {
    addNotification: (state, action: PayloadAction<string>) => {
      state.items.push({ id: Date.now().toString(), label: action.payload });
    },
    clearNotifications: (state) => {
      state.items = [];
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNotification, clearNotifications, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;

export const notificationsSelector = (state: RootState) =>
  state.notification.items;
