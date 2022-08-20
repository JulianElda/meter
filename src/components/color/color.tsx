import { useState } from "react";

import "./color.scss";

const DEFAULT_RGB = ["255", "255", "255"];
const DEFAULT_HEX = "FFFFFF";

export default function Color() {
  const [rgb, setRgb] = useState<string[]>(DEFAULT_RGB);
  const [hex, setHex] = useState<string>(DEFAULT_HEX);

  const hexToRgb = function (hexString: string): string[] {
    const toRgb = function (fromHex: string): string {
      return parseInt(fromHex, 16).toString();
    };

    return [
      toRgb(hexString.slice(0, 2)),
      toRgb(hexString.slice(2, 4)),
      toRgb(hexString.slice(4, 6)),
    ];
  };

  const rgbToHex = function (rgbString: string[]): string {
    const toHex = function (fromRgb: string): string {
      let result = parseInt(fromRgb).toString(16);
      if (result.length === 1) result = "0" + result;
      return result;
    };
    return [toHex(rgbString[0]), toHex(rgbString[1]), toHex(rgbString[2])]
      .join("")
      .toUpperCase();
  };

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
      <div className="flex my-2">
        <div className="flex-1 mr-2">
          <label htmlFor="red" className="input-label">
            R
          </label>
          <input
            type="text"
            id="red"
            name="red"
            data-testid="red"
            value={rgb[0]}
            onChange={(event) =>
              onChangeRgb([event.target.value, rgb[1], rgb[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 mx-2">
          <label htmlFor="green" className="input-label">
            G
          </label>
          <input
            type="text"
            id="green"
            name="green"
            data-testid="green"
            value={rgb[1]}
            onChange={(event) =>
              onChangeRgb([rgb[0], event.target.value, rgb[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="blue" className="input-label">
            B
          </label>
          <input
            type="text"
            id="blue"
            name="blue"
            data-testid="blue"
            value={rgb[2]}
            onChange={(event) =>
              onChangeRgb([rgb[0], rgb[1], event.target.value])
            }
            className="input-field-text"
          />
        </div>
      </div>
      <div className="flex my-2">
        <div className="flex-1">
          <label htmlFor="hex" className="input-label">
            Hex
          </label>
          <input
            type="text"
            id="hex"
            name="hex"
            data-testid="hex"
            value={hex}
            minLength={6}
            maxLength={6}
            onChange={(event) => onChangeHex(event.target.value)}
            className="input-field-text"
          />
        </div>
      </div>
      <div
        className="color-preview"
        style={{ backgroundColor: "#" + hex }}
        data-testid="preview">
        &nbsp;
      </div>
    </div>
  );
}
