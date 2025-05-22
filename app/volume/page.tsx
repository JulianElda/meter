import type { Metadata } from "next";
import { Volume } from "./volume";

export default function VolumePage() {
  return <Volume />;
}

export const metadata: Metadata = {
  title: "Volume conversion - meter",
  description: "Convert volume units online",
};
