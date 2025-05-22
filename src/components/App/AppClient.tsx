"use client";

import { Navigation } from "@/src/components/Navigation/Navigation";
import { Footer } from "@/src/components/Footer/Footer";
import { NotificationsProvider } from "@/src/components/notifications/notifications.context";
import { Notifications } from "@/src/components/notifications/notifications";

export function AppClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotificationsProvider>
      <div className="flex">
        <Navigation />
        <div className="mx-auto w-full max-w-xl">
          <div className="w-full flex-col">
            <main className="text-lg space-y-2">{children}</main>
          </div>
        </div>
      </div>

      <Footer />
      <Notifications />
    </NotificationsProvider>
  );
}
