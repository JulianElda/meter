import type { Metadata } from "next";

import { Speed } from "./speed";

export const metadata: Metadata = {
  description: "Convert speed units online",
  title: "Speed conversion - meter",
};

export default function SpeedPage() {
  return <Speed />;
}
