import { createContext, useContext } from "react";
import { useNotifications } from "./useNotifications";
import { Notification } from "./notifications.type";

type NotificationContextValue = {
  notifications: Notification[];
  addNotification: (label: string) => void;
  removeNotification: (notificationId: string) => void;
};

const NotificationsContext = createContext<NotificationContextValue | null>(
  null
);

export function NotificationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useNotifications();
  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotificationsWithContext(): NotificationContextValue {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error(
      "useNotificationsWithContext must be used within a NotificationsProvider"
    );
  }
  return context;
}
