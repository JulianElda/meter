import type { Metadata } from "next";

import { Length } from "./length";

export const metadata: Metadata = {
  description: "Convert length units online",
  title: "Length conversion - meter",
};

export default function LengthPage() {
  return <Length />;
}
