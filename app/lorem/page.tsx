import type { Metadata } from "next";

import { Lorem } from "./lorem";
import { loremText } from "./lorem.data";

export const metadata: Metadata = {
  description: "Generate Lorem Ipsum online",
  title: "Lorem Ipsum - meter",
};

export default function LoremPage() {
  return <Lorem loremText={loremText} />;
}
