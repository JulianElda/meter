"use client";

import { Button, Card, InputSlider, TextArea } from "@julianelda/scratchpad";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notification/notification.slice";

export function Lorem({ loremText }: { loremText: string }) {
  const dispatch = useAppDispatch();
  const [words, setWords] = useState<number>(100);
  const trimLorem = (text: string): string => {
    return text.split(" ").slice(0, words).join(" ");
  };
  const [lorem, setLorem] = useState<string>(trimLorem(loremText));

  const onChangeWords = (value: number) => {
    setWords(value);
    setLorem(trimLorem(loremText));
  };

  const onCopyToClipboard = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(lorem);

    dispatch(addNotification("Password copied"));
  };

  return (
    <>
      <div>
        <PageHeader title="Lorem Ipsum" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputSlider
            hideLabel={false}
            id="lorem-words"
            label="Words"
            max={300}
            min={10}
            onChange={onChangeWords as (value: number | string) => void}
            value={words}
          />
          <div className="font-mono">
            <TextArea
              hideLabel={true}
              id="lorem-lorem"
              label="Lorem ipsum"
              value={lorem}
            />
          </div>

          <div className="flex justify-end w-full space-x-4">
            <Button
              id="lorem-copy"
              onClick={onCopyToClipboard}
              style="secondary"
              text="Copy"
              type="button"
            />
          </div>
        </div>
      </Card>
    </>
  );
}
