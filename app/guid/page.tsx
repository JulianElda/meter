import type { Metadata } from "next";

import { Guid } from "./guid";

export const metadata: Metadata = {
  description: "Generate GUID online",
  title: "GUID generator - meter",
};

export default function GuidPage() {
  return <Guid />;
}
