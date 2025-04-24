import { ProgressBar } from "@julianelda/scratchpad";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import * as zxcvbnCommonPackage from "@zxcvbn-ts/language-common";

export function PasswordStrength({ password }: { password: string }) {
  const options = {
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
    },
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
  };

  zxcvbnOptions.setOptions(options);

  const strength = zxcvbn(password);

  return (
    <div>
      <ProgressBar
        id="password-strengthbar"
        label="Password strength"
        hideLabel={true}
        max={4}
        min={0}
        value={strength.score}
      />
      <p>
        Time to crack:{" "}
        {strength.crackTimesDisplay.offlineFastHashing1e10PerSecond}
      </p>
    </div>
  );
}
