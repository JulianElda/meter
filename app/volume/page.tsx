import type { Metadata } from "next";

import { Volume } from "./volume";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Convert volume units online",
  title: "Volume conversion - meter",
};

export default function VolumePage() {
  return <Volume />;
}
