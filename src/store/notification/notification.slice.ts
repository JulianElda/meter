import type { Notification } from "@/src/components/notifications/notifications.type";
import { RootState } from "@/src/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  items: Notification[];
}

const initialState: NotificationState = {
  items: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<string>) => {
      state.items.push({ id: Date.now().toString(), label: action.payload });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((n) => n.id !== action.payload);
    },
    clearNotifications: (state) => {
      state.items = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } =
  notificationSlice.actions;

export default notificationSlice.reducer;

export const notificationsSelector = (state: RootState) =>
  state.notification.items;
