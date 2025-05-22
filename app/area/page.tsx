import type { Metadata } from "next";
import { Area } from "./area";

export default function AreaPage() {
  return <Area />;
}

export const metadata: Metadata = {
  title: "Area conversion - meter",
  description: "Convert area units online",
};
