import type { Metadata } from "next";
import { Temperature } from "./temperature";

export default function TemperaturePage() {
  return <Temperature />;
}
export const metadata: Metadata = {
  title: "Temperature conversion - meter",
  description: "Convert temperature units online",
};
