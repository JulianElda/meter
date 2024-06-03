import { Card, Checkbox, Input } from "@julianelda/scratchpad";
import { useState } from "react";
import { PageHeader } from "src/components/PageHeader";
import { generatePassword, isValidNumber } from "src/util/common";

export function Password() {
  const [length, setLength] = useState<string>("16");
  const [numbers, setNumbers] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(false);

  const onChangeLength = function (value: string) {
    if (value === "") setLength("16");
    if (!isValidNumber(value)) return;
    else setLength(value);
  };

  const password = generatePassword(
    parseInt(length),
    uppercase,
    numbers,
    special
  );

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
            onChange={(value) => onChangeLength(value)}
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
