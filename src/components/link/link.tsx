"use client";

import { Hyperlink } from "@julianelda/scratchpad";

export function Link({ title, href }: { title: string; href: string }) {
  return (
    <Hyperlink
      title={title}
      href={href}
    />
  );
}
