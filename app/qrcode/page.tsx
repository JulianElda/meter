import type { Metadata } from "next";

import { QrCode } from "./qrcode";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  description: "Generate QR code from a URL",
  title: "QR Code Generator",
};

export default function QrCodePage() {
  return <QrCode />;
}
