import type { Metadata } from "next";

import { WhatsAppLink } from "./whatsapp-link";

export const metadata: Metadata = {
  description: "WhatsApp link generator",
  title: "WhatsApp link generator",
};

export default function WhatsAppLinkPage() {
  return <WhatsAppLink />;
}
