import { create } from "zustand";

import type { Notification } from "@/src/components/notifications/notifications.type";

interface NotificationState {
  addNotification: (label: string) => void;
  clearNotifications: () => void;
  items: Notification[];
  removeNotification: (id: string) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  addNotification: (label) =>
    set((state) => ({
      items: [...state.items, { id: Date.now().toString(), label }],
    })),
  clearNotifications: () => set(() => ({ items: [] })),
  items: [],
  removeNotification: (id) =>
    set((state) => ({
      items: state.items.filter((n) => n.id !== id),
    })),
}));

export const notificationActions = {
  addNotification: (label: string) =>
    useNotificationStore.getState().addNotification(label),
  clearNotifications: () =>
    useNotificationStore.getState().clearNotifications(),
  removeNotification: (id: string) =>
    useNotificationStore.getState().removeNotification(id),
};

export const useNotifications = () =>
  useNotificationStore((state) => state.items);
