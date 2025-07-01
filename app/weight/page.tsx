import type { Metadata } from "next";

import { Weight } from "./weight";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Convert weight units online",
  title: "Weight conversion - meter",
};

export default function WeightPage() {
  return <Weight />;
}
