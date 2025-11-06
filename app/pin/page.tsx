import type { Metadata } from "next";

import { Pin } from "./pin";

export const metadata: Metadata = {
  description: "Generate pin number online",
  title: "Pin generator - meter",
};

export default function PinPage() {
  return <Pin />;
}
