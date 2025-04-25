import { Notification } from "./notification";
import { useNotificationsWithContext } from "./notifications.context";

export function Notifications() {
  const { notifications, removeNotification } = useNotificationsWithContext();

  return (
    <div className="z-10 fixed bottom-1 left-1/2 -translate-x-1/2  flex flex-col items-center space-y-2">
      {notifications.map((notification) => {
        return (
          <Notification
            key={notification.id}
            id={notification.id}
            label={notification.label}
            callback={removeNotification}
          />
        );
      })}
    </div>
  );
}
