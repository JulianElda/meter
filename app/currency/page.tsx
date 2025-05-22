import type { Metadata } from "next";
import { Currency } from "./currency";

export default function CurrencyPage() {
  return <Currency />;
}

export const metadata: Metadata = {
  title: "Currency conversion - meter",
  description: "Convert currencies online",
};
