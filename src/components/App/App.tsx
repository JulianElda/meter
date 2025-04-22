"use client";

import { Navigation } from "@/src/components/Navigation/Navigation";
import { Footer } from "@/src/components/Footer/Footer";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col sm:pt-4">
      <h1 className="text-center font-heading text-3xl font-semibold">meter</h1>
      <p className="my-1 text-center font-heading text-lg font-semibold md:pb-10">
        tools and converters
      </p>

      <div className="flex">
        <Navigation />
        <div className="mx-auto w-full max-w-xl">
          <div className="w-full flex-col">
            <main className="text-lg space-y-2">{children}</main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
