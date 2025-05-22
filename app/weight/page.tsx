import type { Metadata } from "next";
import { Weight } from "./weight";

export default function WeightPage() {
  return <Weight />;
}

export const metadata: Metadata = {
  title: "Weight conversion - meter",
  description: "Convert weight units online",
};
