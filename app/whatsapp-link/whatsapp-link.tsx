"use client";

import { Button, Card, Input, Select } from "@julianelda/scratchpad";
import { useState } from "react";

import { phoneCodes } from "@/app/whatsapp-link/whatsapp-link.data";
import { PageHeader } from "@/src/components/page-header/page-header";

export function WhatsAppLink() {
  const [country, setCountry] = useState<string>("de-49");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onOpenLink = () => {
    const link = `https://api.whatsapp.com/send?phone=${country.split("-")[1]}${phoneNumber.replaceAll(/\D/g, "")}`;
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div>
        <PageHeader title="WhatsApp link generator" />
      </div>
      <Card>
        <div className="space-y-2">
          <Select
            id="whatsapp-country"
            label="Country"
            onChange={(value) => {
              setCountry(value as string);
            }}
            options={phoneCodes}
            value={country}
          />
          <Input
            id="whatsapp-phone-number"
            label="Phone number"
            onChange={(e) => setPhoneNumber(e as string)}
            type="text"
            value={phoneNumber}
          />
          <div className="flex w-full justify-end space-x-4">
            <Button
              id="whatsapp-generate"
              onClick={onOpenLink}
              style="primary"
              text="Generate link"
              type="button"
            />
          </div>
        </div>
      </Card>
    </>
  );
}
