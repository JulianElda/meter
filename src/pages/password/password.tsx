import { useState } from "react";
import { generatePassword, isValidNumber } from "util/common";

import Input from "components/form/input";
import Checkbox from "components/form/checkbox";

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
    <div>
      <div className="flex my-2">
        <Input
          id="password-length"
          label="Password length"
          value={length}
          onChange={(value) => onChangeLength(value)}
        />
      </div>
      <div className="flex my-2">
        <Checkbox
          id="password-numbers"
          label="Numbers"
          value={numbers}
          onChange={(value) => setNumbers(value)}
        />
      </div>
      <div className="flex my-2">
        <Checkbox
          id="password-uppercase"
          label="Uppercase"
          value={uppercase}
          onChange={(value) => setUppercase(value)}
        />
      </div>
      <div className="flex my-2">
        <Checkbox
          id="password-special"
          label="Symbols"
          value={special}
          onChange={(value) => setSpecial(value)}
        />
      </div>
      <div className="flex my-2">
        <Input
          id="password-password"
          label="Password"
          value={password}
        />
      </div>
    </div>
  );
}