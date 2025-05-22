import type { Metadata } from "next";
import { Base } from "./base";

export default function BasePage() {
  return <Base />;
}

export const metadata: Metadata = {
  title: "Base conversion - meter",
  description: "Convert base units online",
};
