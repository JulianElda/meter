import type { Metadata } from "next";

import { Area } from "./area";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Convert area units online",
  title: "Area conversion - meter",
};

export default function AreaPage() {
  return <Area />;
}
