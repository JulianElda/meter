import type { Metadata } from "next";

import { Color } from "./color";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Convert color codes online",
  title: "Color conversion - meter",
};

export default function ColorPage() {
  return <Color />;
}
