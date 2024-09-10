import { PageHeader } from "@/src/components/PageHeader";
import { generatePassword } from "@/src/util/common";
import { Card, Checkbox, Input } from "@julianelda/scratchpad";
import { useState } from "react";

export function Password() {
  const [length, setLength] = useState<number>(16);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(false);

  const onChangeLength = function (value: number) {
    setLength(value);
  };

  const password = generatePassword(length, uppercase, numbers, special);

  return (
    <>
      <div>
        <PageHeader title="Password generator" />
      </div>
      <Card>
        <div className="space-y-2">
          <Input
            id="password-password"
            type="text"
            label="Password"
            value={password}
          />
          <Input
            type="number"
            id="password-length"
            label="Password length"
            value={length}
            onChange={onChangeLength as (value: string | number) => void}
          />
          <Checkbox
            id="password-numbers"
            label="Numbers"
            value={numbers}
            onChange={(value) => setNumbers(value)}
          />
          <Checkbox
            id="password-uppercase"
            label="Uppercase"
            value={uppercase}
            onChange={(value) => setUppercase(value)}
          />
          <Checkbox
            id="password-special"
            label="Symbols"
            value={special}
            onChange={(value) => setSpecial(value)}
          />
        </div>
      </Card>
    </>
  );
}
