"use client";

import { useNotifications } from "@/src/store/notification/notification.store";

import { Notification } from "./notification";

export function Notifications() {
  const notifications = useNotifications();

  return (
    <div
      className={`
        fixed bottom-1 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center
        space-y-2
      `}>
      {notifications.map((notification) => {
        return (
          <Notification
            id={notification.id}
            key={notification.id}
            label={notification.label}
          />
        );
      })}
    </div>
  );
}
