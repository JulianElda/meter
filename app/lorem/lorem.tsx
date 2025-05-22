"use client";

import { PageHeader } from "@/src/components/page-header";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notification/notification.slice";
import { Button, Card, InputSlider, TextArea } from "@julianelda/scratchpad";
import { useState } from "react";

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
            id="lorem-words"
            label="Words"
            value={words}
            max={300}
            min={10}
            hideLabel={false}
            onChange={onChangeWords as (value: string | number) => void}
          />
          <div className="font-mono">
            <TextArea
              id="lorem-lorem"
              label="Lorem ipsum"
              value={lorem}
              hideLabel={true}
            />
          </div>

          <div className="flex justify-end w-full space-x-4">
            <Button
              type="button"
              style="secondary"
              id="lorem-copy"
              text="Copy"
              onClick={onCopyToClipboard}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
