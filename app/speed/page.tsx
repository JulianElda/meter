import type { Metadata } from "next";
import { Speed } from "./speed";

export default function SpeedPage() {
  return <Speed />;
}

export const metadata: Metadata = {
  title: "Speed conversion - meter",
  description: "Convert speed units online",
};
