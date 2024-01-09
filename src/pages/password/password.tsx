import { useState } from "react";
import { Card } from "@julianelda/scratchpad";
import { Input, Checkbox } from "@julianelda/scratchpad";
import Header from "src/components/header/header";
import { generatePassword, isValidNumber } from "src/util/common";

export default function Password() {
  const [length, setLength] = useState<string>("16");
  const [numbers, setNumbers] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(true);

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
        <Header title="Password generator" />
      </div>
      <Card>
        <div className="my-2 flex">
          <Input
            id="password-password"
            type="text"
            label="Password"
            value={password}
          />
        </div>
        <div className="mb-2 flex">
          <Input
            type="number"
            id="password-length"
            label="Password length"
            value={length}
            onChange={(value) => onChangeLength(value)}
          />
        </div>
        <div className="my-2 flex">
          <Checkbox
            id="password-numbers"
            label="Numbers"
            value={numbers}
            onChange={(value) => setNumbers(value)}
          />
        </div>
        <div className="my-2 flex">
          <Checkbox
            id="password-uppercase"
            label="Uppercase"
            value={uppercase}
            onChange={(value) => setUppercase(value)}
          />
        </div>
        <div className="my-2 flex">
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
