import type { Metadata } from "next";

import { Temperature } from "./temperature";

export const metadata: Metadata = {
  description: "Convert temperature units online",
  title: "Temperature conversion - meter",
};

export default function TemperaturePage() {
  return <Temperature />;
}
