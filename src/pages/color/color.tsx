import { useState } from "react";

import Card from "src/components/card/card";
import Input from "src/components/form/input";
import Header from "src/components/header/header";

import { hexToRgb, rgbToHex } from "src/util/conversion";

import styles from "./color.module.css";

const DEFAULT_RGB = ["220", "20", "60"];

export default function Color() {
  const [rgb, setRgb] = useState<string[]>(DEFAULT_RGB);
  const [hex, setHex] = useState<string>(rgbToHex(rgb));

  const onChangeRgb = function (value: string[]) {
    setRgb(value);
    setHex(rgbToHex(value));
  };

  const onChangeHex = function (value: string) {
    setHex(value);
    setRgb(hexToRgb(value));
  };

  return (
    <>
      <div>
        <Header title="Color conversion" />
      </div>
      <Card>
        <div className="flex mb-2 space-x-2">
          <Input
            type="text"
            id="red-input"
            label="R"
            value={rgb[0]}
            onChange={(value) => onChangeRgb([value, rgb[1], rgb[2]])}
          />
          <Input
            type="text"
            id="green-input"
            label="G"
            value={rgb[1]}
            onChange={(value) => onChangeRgb([rgb[0], value, rgb[2]])}
          />
          <Input
            type="text"
            id="blue-input"
            label="B"
            value={rgb[2]}
            onChange={(value) => onChangeRgb([rgb[0], rgb[1], value])}
          />
        </div>
        <div className="flex my-2">
          <Input
            type="text"
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
      </Card>
    </>
  );
}
