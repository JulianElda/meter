import type { Metadata } from "next";

import { Bmi } from "./bmi";

export const metadata: Metadata = {
  description: "Calculate Body Mass Index (BMI) online",
  title: "BMI calculator - meter",
};

export default function BmiPage() {
  return <Bmi />;
}
