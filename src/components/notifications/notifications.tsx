"use client";

import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import {
  notificationsSelector,
  removeNotification,
} from "@/src/store/notification/notification.slice";
import { Notification } from "./notification";

export function Notifications() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(notificationsSelector);

  const onRemoveNotification = (notificationId: string) => {
    dispatch(removeNotification(notificationId));
  };

  return (
    <div className="z-10 fixed bottom-1 left-1/2 -translate-x-1/2  flex flex-col items-center space-y-2">
      {notifications.map((notification) => {
        return (
          <Notification
            key={notification.id}
            id={notification.id}
            label={notification.label}
            callback={onRemoveNotification}
          />
        );
      })}
    </div>
  );
}
