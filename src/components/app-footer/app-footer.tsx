"use client";

import { Footer } from "@julianelda/scratchpad";

export function AppFooter() {
  return (
    <div
      className={`
        fixed inset-x-0 bottom-0 mx-auto hidden max-w-4xl
        sm:block
      `}>
      <Footer link="https://github.com/JulianElda/meter" />
    </div>
  );
}
