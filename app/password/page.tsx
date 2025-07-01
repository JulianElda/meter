import type { Metadata } from "next";

import { Password } from "./password";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Generate password online",
  title: "Password generator - meter",
};

export default function PasswordPage() {
  return <Password />;
}
