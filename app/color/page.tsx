import type { Metadata } from "next";
import { Color } from "./color";

export default function ColorPage() {
  return <Color />;
}

export const metadata: Metadata = {
  title: "Color conversion - meter",
  description: "Convert color codes online",
};
