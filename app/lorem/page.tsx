import type { Metadata } from "next";
import { Lorem } from "./lorem";
import { loremText } from "./lorem.data";

export default function LoremPage() {
  return <Lorem loremText={loremText} />;
}

export const metadata: Metadata = {
  title: "Lorem Ipsum - meter",
  description: "Generate Lorem Ipsum online",
};
