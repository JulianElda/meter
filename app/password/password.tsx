"use client";

import {
  Button,
  Card,
  Checkbox,
  InputSlider,
  TextArea,
} from "@julianelda/scratchpad";
import { useEffect, useState } from "react";

import { PageHeader } from "@/src/components/page-header/page-header";
import { notificationActions } from "@/src/store/notification/notification.store";
import { generateRandomString } from "@/src/util/string";

export function Password() {
  const [length, setLength] = useState<number>(16);
  const [numerals, setNumerals] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setPassword(
      generateRandomString({
        length,
        numerals,
        special,
        uppercase,
      }),
    );
  }, [length, uppercase, numerals, special]);

  const onChangeLength = function (value: number) {
    setLength(value);
  };

  const onRefresh = () => {
    setPassword(
      generateRandomString({
        length,
        numerals,
        special,
        uppercase,
      }),
    );
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const onCopyToClipboard = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(password);

    notificationActions.addNotification("Password copied");
  };

  return (
    <>
      <div>
        <PageHeader title="Password generator" />
      </div>
      <Card>
        <div className="space-y-2">
          <Checkbox
            id="password-numbers"
            label="Numbers"
            onChange={(value: boolean) => setNumerals(value)}
            value={numerals}
          />
          <Checkbox
            id="password-uppercase"
            label="Uppercase"
            onChange={(value: boolean) => setUppercase(value)}
            value={uppercase}
          />
          <Checkbox
            id="password-special"
            label="Symbols"
            onChange={(value: boolean) => setSpecial(value)}
            value={special}
          />
          <InputSlider
            hideLabel={false}
            id="password-length"
            label="Length"
            max={256}
            min={1}
            onChange={onChangeLength as (value: number | string) => void}
            value={length}
          />
          <div className="font-mono">
            <TextArea
              hideLabel={true}
              id="password-password"
              label="Password"
              onChange={onChangePassword as (value: number | string) => void}
              value={password}
            />
          </div>

          <div className="flex w-full justify-end space-x-4">
            <Button
              id="password-copy"
              onClick={onCopyToClipboard}
              style="secondary"
              text="Copy"
              type="button"
            />
            <Button
              id="password-refresh"
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
