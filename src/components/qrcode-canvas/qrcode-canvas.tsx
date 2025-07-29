"use client";

import QRCode from "qrcode";
import { useEffect, useRef } from "react";

interface QrCodeCanvasProps {
  url: string;
}

export function QrCodeCanvas(props: QrCodeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !props.url) return;

    QRCode.toCanvas(canvasRef.current, props.url.trim(), {
      margin: 2,
      width: 256,
    });
  }, [props.url]);

  return (
    <canvas
      className="size-full"
      ref={canvasRef}
    />
  );
}
