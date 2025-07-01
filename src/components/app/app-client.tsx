"use client";

import { Footer } from "@/src/components/footer";
import { Navigation } from "@/src/components/navigation";
import { Notifications } from "@/src/components/notifications";
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
