"use client";

import { Lorem } from "./Lorem";
import { loremText } from "./Lorem.data";

export default function LoremPage() {
  return <Lorem loremText={loremText} />;
}
