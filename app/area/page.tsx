import type { Metadata } from "next";

import { Area } from "./area";

export const metadata: Metadata = {
  description: "Convert area units online",
  title: "Area conversion - meter",
};

export default function AreaPage() {
  return <Area />;
}
