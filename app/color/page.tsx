import type { Metadata } from "next";

import { Color } from "./color";

export const metadata: Metadata = {
  description: "Convert color codes online",
  title: "Color conversion - meter",
};

export default function ColorPage() {
  return <Color />;
}
