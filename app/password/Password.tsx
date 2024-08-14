import { PageHeader } from "@/src/components/PageHeader";
import { arrowsRotateSvg } from "@/src/components/svg/arrows-rotate";
import { generatePassword } from "@/src/util/common";
import { Card, Checkbox, Input, InputButton } from "@julianelda/scratchpad";
import { useEffect, useState } from "react";

export function Password() {
  const [length, setLength] = useState<number>(16);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [special, setSpecial] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setPassword(generatePassword(length, uppercase, numbers, special));
  }, [length, uppercase, numbers, special]);

  return (
    <>
      <div>
        <PageHeader title="Password generator" />
      </div>
      <Card>
        <div className="space-y-2">
          <InputButton
            id="password-password"
            type="text"
            label="Password"
            value={password}
            icon={arrowsRotateSvg}
            buttonAriaLabel="Re-generate"
            onButtonClick={() =>
              setPassword(generatePassword(length, uppercase, numbers, special))
            }
          />
          <Input
            type="number"
            id="password-length"
            label="Password length"
            value={length}
            onChange={(value) => setLength(value as number)}
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
