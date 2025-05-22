"use client";

import { Lorem } from "./lorem";
import { loremText } from "./lorem.data";

export default function LoremPage() {
  return <Lorem loremText={loremText} />;
}
