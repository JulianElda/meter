import { useNotificationsWithContext } from "@/src/components/notifications/notifications.context";
import { PageHeader } from "@/src/components/PageHeader";
import { generateRandomString } from "@/src/util/string";
import {
  Button,
  Card,
  Checkbox,
  InputSlider,
  TextArea,
} from "@julianelda/scratchpad";
import { useEffect, useState } from "react";

export function Password() {
  const [length, setLength] = useState<number>(16);
  const [numerals, setNumerals] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const { addNotification } = useNotificationsWithContext();

  useEffect(() => {
    setPassword(
      generateRandomString({
        length,
        uppercase,
        numerals,
        special,
      })
    );
  }, [length, uppercase, numerals, special]);

  const onChangeLength = function (value: number) {
    setLength(value);
  };

  const onRefresh = () => {
    setPassword(
      generateRandomString({
        length,
        uppercase,
        numerals,
        special,
      })
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

    addNotification("Password copied");
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
            value={numerals}
            onChange={(value: boolean) => setNumerals(value)}
          />
          <Checkbox
            id="password-uppercase"
            label="Uppercase"
            value={uppercase}
            onChange={(value: boolean) => setUppercase(value)}
          />
          <Checkbox
            id="password-special"
            label="Symbols"
            value={special}
            onChange={(value: boolean) => setSpecial(value)}
          />
          <InputSlider
            id="password-length"
            label="Length"
            value={length}
            max={256}
            min={1}
            hideLabel={false}
            onChange={onChangeLength as (value: string | number) => void}
          />
          <div className="font-mono">
            <TextArea
              id="password-password"
              label="Password"
              value={password}
              hideLabel={true}
              onChange={onChangePassword as (value: string | number) => void}
            />
          </div>

          <div className="flex justify-end w-full space-x-4">
            <Button
              type="button"
              style="secondary"
              id="password-copy"
              text="Copy"
              onClick={onCopyToClipboard}
            />
            <Button
              type="button"
              style="secondary"
              id="password-refresh"
              text="Refresh"
              onClick={onRefresh}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
