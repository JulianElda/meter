import type { Metadata } from "next";

import { Weight } from "./weight";

export const metadata: Metadata = {
  description: "Convert weight units online",
  title: "Weight conversion - meter",
};

export default function WeightPage() {
  return <Weight />;
}
