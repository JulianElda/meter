import type { Metadata } from "next";

import { QrCode } from "./qrcode";

export const metadata: Metadata = {
  description: "Generate QR code from a URL",
  title: "QR Code Generator",
};

export default function QrCodePage() {
  return <QrCode />;
}
