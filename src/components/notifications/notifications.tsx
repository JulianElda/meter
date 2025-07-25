"use client";

import { useAppSelector } from "@/src/store/hooks";
import { notificationsSelector } from "@/src/store/notification/notification.slice";

import { Notification } from "./notification";

export function Notifications() {
  const notifications = useAppSelector(notificationsSelector);

  return (
    <div className="z-10 fixed bottom-1 left-1/2 -translate-x-1/2  flex flex-col items-center space-y-2">
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
