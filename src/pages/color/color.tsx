import { useState } from "react";
import { hexToRgb, rgbToHex } from "util/conversion";
import Input from "components/form/input";

import styles from "./color.module.css";

const DEFAULT_RGB = ["255", "255", "255"];
const DEFAULT_HEX = "FFFFFF";

export default function Color() {
  const [rgb, setRgb] = useState<string[]>(DEFAULT_RGB);
  const [hex, setHex] = useState<string>(DEFAULT_HEX);

  const onChangeRgb = function (value: string[]) {
    setRgb(value);
    setHex(rgbToHex(value));
  };

  const onChangeHex = function (value: string) {
    setHex(value);
    setRgb(hexToRgb(value));
  };

  return (
    <div>
      <div className="flex my-2 space-x-2">
        <Input
          id="red-input"
          label="R"
          value={rgb[0]}
          onChange={(value) => onChangeRgb([value, rgb[1], rgb[2]])}
        />
        <Input
          id="green-input"
          label="G"
          value={rgb[1]}
          onChange={(value) => onChangeRgb([rgb[0], value, rgb[2]])}
        />
        <Input
          id="blue-input"
          label="B"
          value={rgb[2]}
          onChange={(value) => onChangeRgb([rgb[0], rgb[1], value])}
        />
      </div>
      <div className="flex my-2">
        <Input
          id="hex-input"
          label="Hex"
          value={hex}
          onChange={(value) => onChangeHex(value)}
        />
      </div>
      <div
        className={styles.preview}
        style={{ backgroundColor: "#" + hex }}
        data-testid="preview">
        &nbsp;
      </div>
    </div>
  );
}
