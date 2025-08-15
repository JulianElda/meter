import type { Metadata } from "next";

import { Pin } from "./pin";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Generate pin number online",
  title: "Pin generator - meter",
};

export default function PinPage() {
  return <Pin />;
}
