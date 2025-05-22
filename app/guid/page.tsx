import type { Metadata } from "next";
import { Guid } from "./guid";

export default function GuidPage() {
  return <Guid />;
}

export const metadata: Metadata = {
  title: "GUID generator - meter",
  description: "Generate GUID online",
};
