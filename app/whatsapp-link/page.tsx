import type { Metadata } from "next";

import { WhatsAppLink } from "./whatsapp-link";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "WhatsApp link generator",
  title: "WhatsApp link generator",
};

export default function WhatsAppLinkPage() {
  return <WhatsAppLink />;
}
