import { useState, useCallback } from "react";

type Notification = {
  id: string;
  label: string;
};

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (label: string) => {
    const newNotification: Notification = {
      id: Date.now().toString(),
      label,
    };

    setNotifications((currentNotifications) => [
      ...currentNotifications,
      newNotification,
    ]);
  };

  const removeNotification = useCallback((notificationId: string) => {
    setNotifications((prev) =>
      prev.filter((current) => current.id !== notificationId)
    );
  }, []);

  return { notifications, addNotification, removeNotification };
}
