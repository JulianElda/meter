import type { Metadata } from "next";

import { Base } from "./base";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Convert base units online",
  title: "Base conversion - meter",
};

export default function BasePage() {
  return <Base />;
}
