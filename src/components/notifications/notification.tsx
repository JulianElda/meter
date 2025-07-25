"use client";

import { clsx } from "clsx";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { useAppDispatch } from "@/src/store/hooks";
import { removeNotification } from "@/src/store/notification/notification.slice";

interface NotificationProps {
  id: string;
  label: string;
}

export function Notification({ id, label }: NotificationProps) {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    let timeout: NodeJS.Timeout;
    timeout = setTimeout(() => {
      setVisible(false);
      timeout = setTimeout(() => dispatch(removeNotification(id)), 200);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, id]);

  return (
    <div
      className={clsx(
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        "transition-all duration-200 max-w-sm rounded-md flex space-x-2 items-center bg-white px-4 py-3 w-max shadow-sm dark:bg-slate-700"
      )}>
      <CheckCircle className="size-4 dark:text-sky-300 text-sky-600 " />
      <span>{label}</span>
    </div>
  );
}
