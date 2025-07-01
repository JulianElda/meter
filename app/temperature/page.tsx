import type { Metadata } from "next";

import { Temperature } from "./temperature";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Convert temperature units online",
  title: "Temperature conversion - meter",
};

export default function TemperaturePage() {
  return <Temperature />;
}
