"use client";

import { clsx } from "clsx";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

type NotificationProps = {
  id: string;
  label: string;
  callback: (id: string) => void;
};

export function Notification({ id, label, callback }: NotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 10);

    const hide = setTimeout(() => {
      setVisible(false);
      setTimeout(() => callback(id), 200);
    }, 2000);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [callback, id]);

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
