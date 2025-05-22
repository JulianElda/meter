"use client";

import { Navigation } from "@/src/components/Navigation/Navigation";
import { Footer } from "@/src/components/Footer/Footer";
import { Notifications } from "@/src/components/notifications/notifications";
import { ReduxProvider } from "@/src/store/provider";

export function AppClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
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
    </ReduxProvider>
  );
}
