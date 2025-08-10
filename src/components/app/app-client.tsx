"use client";

import { AppFooter } from "@/src/components/app-footer/app-footer";
import { AppHeader } from "@/src/components/app-header/app-header";
import { NavigationMobile } from "@/src/components/navigation/navigation-mobile";
import { Notifications } from "@/src/components/notifications/notifications";
import { ReduxProvider } from "@/src/store/provider";

export function AppClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <AppHeader />

      <div className="flex justify-center">
        <NavigationMobile />
        <div className="z-0 mx-auto w-full max-w-xl p-4">
          <div className="w-full flex-col">
            <main className="space-y-2 text-lg">{children}</main>
          </div>
        </div>
      </div>

      <AppFooter />
      <Notifications />
    </ReduxProvider>
  );
}
