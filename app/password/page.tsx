import type { Metadata } from "next";

import { Password } from "./password";

export const metadata: Metadata = {
  description: "Generate password online",
  title: "Password generator - meter",
};

export default function PasswordPage() {
  return <Password />;
}
