import type { Metadata } from "next";
import { Length } from "./length";

export default function LengthPage() {
  return <Length />;
}

export const metadata: Metadata = {
  title: "Length conversion - meter",
  description: "Convert length units online",
};
