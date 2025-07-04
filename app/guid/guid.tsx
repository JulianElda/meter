"use client";

import { Button, Card, Input } from "@julianelda/scratchpad";
import { useState } from "react";

import { PageHeader } from "@/src/components/page-header";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notification/notification.slice";
import { generateGUID } from "@/src/util/string";

export function Guid() {
  const dispatch = useAppDispatch();
  const [guid, setGuid] = useState(generateGUID());

  const onRefresh = () => {
    setGuid(generateGUID());
  };

  const onCopyToClipboard = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(guid);

    dispatch(addNotification("Password copied"));
  };

  return (
    <>
      <div>
        <PageHeader title="GUID generator" />
      </div>
      <Card>
        <div className="space-y-2">
          <div className="font-mono">
            <Input
              hideLabel={true}
              id="guid-guid"
              label="Guid"
              type="text"
              value={guid}
            />
          </div>

          <div className="flex justify-end w-full space-x-4">
            <Button
              id="guid-copy"
              onClick={onCopyToClipboard}
              style="secondary"
              text="Copy"
              type="button"
            />
            <Button
              id="guid-refresh"
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
