import { useNotificationsWithContext } from "@/src/components/notifications/notifications.context";
import { PageHeader } from "@/src/components/PageHeader";
import { generateGUID } from "@/src/util/string";
import { Button, Card, Input } from "@julianelda/scratchpad";
import { useState } from "react";

export function Guid() {
  const [guid, setGuid] = useState(generateGUID());
  const { addNotification } = useNotificationsWithContext();

  const onRefresh = () => {
    setGuid(generateGUID());
  };

  const onCopyToClipboard = async () => {
    if (!navigator?.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(guid);

    addNotification("Password copied");
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
              type="text"
              id="guid-guid"
              label="Guid"
              value={guid}
              hideLabel={true}
            />
          </div>

          <div className="flex justify-end w-full space-x-4">
            <Button
              type="button"
              style="secondary"
              id="guid-copy"
              text="Copy"
              onClick={onCopyToClipboard}
            />
            <Button
              type="button"
              style="secondary"
              id="guid-refresh"
              text="Refresh"
              onClick={onRefresh}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
