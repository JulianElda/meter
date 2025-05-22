import type { Metadata } from "next";
import { Password } from "./password";

export default function PasswordPage() {
  return <Password />;
}

export const metadata: Metadata = {
  title: "Password generator - meter",
  description: "Generate password online",
};
