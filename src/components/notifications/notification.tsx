"use client";

import { clsx } from "clsx";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { notificationActions } from "@/src/store/notification/notification.store";

interface NotificationProps {
  id: string;
  label: string;
}

export function Notification({ id, label }: NotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      setVisible(false);
      timeout = setTimeout(
        () => notificationActions.removeNotification(id),
        200
      );
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [id]);

  return (
    <div
      className={clsx(
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        `
          flex w-max max-w-sm items-center space-x-2 rounded-md bg-white px-4
          py-3 shadow-sm transition-all duration-200
          dark:bg-slate-700
        `
      )}>
      <CheckCircle
        className={`
          size-4 text-sky-600
          dark:text-sky-300
        `}
      />
      <span>{label}</span>
    </div>
  );
}
