"use client";

import { Card, InputButton } from "@julianelda/scratchpad";
import { QrCodeIcon } from "lucide-react";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";
import { QrCodeCanvas } from "@/src/components/qrcode-canvas/qrcode-canvas";

export function QrCode() {
  const [url, setUrl] = useState(globalThis.location?.href);
  const [qrcodeUrl, setQrcodeUrl] = useState("");

  return (
    <>
      <div>
        <PageHeader title="URL to QR Code" />
      </div>
      <Card>
        <div className="flex flex-col gap-8">
          <div className="font-mono">
            <InputButton
              buttonAriaLabel="Generate QR code"
              hideLabel={true}
              icon={<QrCodeIcon />}
              id="qrcode-url"
              label="URL"
              onButtonClick={() => setQrcodeUrl(url)}
              onChange={(value) => setUrl(value as string)}
              type="text"
              value={url}
            />
          </div>

          {qrcodeUrl && (
            <div className="flex size-full justify-center">
              <QrCodeCanvas url={qrcodeUrl} />
            </div>
          )}
        </div>
      </Card>
    </>
  );
}
