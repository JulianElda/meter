import type { Metadata } from "next";

import { Base } from "./base";

export const metadata: Metadata = {
  description: "Convert base units online",
  title: "Base conversion - meter",
};

export default function BasePage() {
  return <Base />;
}
