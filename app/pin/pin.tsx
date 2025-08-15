"use client";

import { Button, Card, InputSlider, TextArea } from "@julianelda/scratchpad";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";
import { notificationActions } from "@/src/store/notification/notification.store";
import { generateRandomString } from "@/src/util/string";

export function Pin() {
  const [length, setLength] = useState<number>(4);
  const [pin, setPin] = useState<string>(
    generateRandomString({
      length,
      lowercase: false,
      numerals: true,
      special: false,
      uppercase: false,
    })
  );

  const changePin = (length: number) => {
    setPin(
      generateRandomString({
        length,
        lowercase: false,
        numerals: true,
        special: false,
        uppercase: false,
      })
    );
  };

  const onRefresh = () => {
    changePin(length);
  };

  const onChangeLength = (value: number) => {
    setLength(value);
    changePin(value);
  };

  const onCopyToClipboard = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(pin.toString());

    notificationActions.addNotification("PIN copied");
  };

  return (
    <>
      <div>
        <PageHeader title="PIN Generator" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSlider
            hideLabel={false}
            id="pin-input"
            label="PIN length"
            max={12}
            min={4}
            onChange={onChangeLength as (value: number | string) => void}
            value={length}
          />
          <div className="font-mono">
            <TextArea
              hideLabel={true}
              id="pin-pin"
              label="Generated PIN"
              value={pin}
            />
          </div>

          <div className="flex w-full justify-end space-x-4">
            <Button
              id="pin-copy"
              onClick={onCopyToClipboard}
              style="secondary"
              text="Copy"
              type="button"
            />
            <Button
              id="pin-refresh"
              onClick={onRefresh}
              style="secondary"
              text="Refresh"
              type="button"
            />
          </div>
        </div>
      </Card>
    </>
  );
}
