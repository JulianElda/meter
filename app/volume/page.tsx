import type { Metadata } from "next";

import { Volume } from "./volume";

export const metadata: Metadata = {
  description: "Convert volume units online",
  title: "Volume conversion - meter",
};

export default function VolumePage() {
  return <Volume />;
}
