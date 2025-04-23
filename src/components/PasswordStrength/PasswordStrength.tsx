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
      <p>Score: {strength.score}</p>
      <p>
        Time to crack:{" "}
        {strength.crackTimesDisplay.offlineFastHashing1e10PerSecond}
      </p>
    </div>
  );
}
