import { useState } from "react";
import { hexToRgb, rgbToHex } from "util/common";

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
      <div className="flex my-2">
        <div className="flex-1 mr-2">
          <label htmlFor="red-input" className="input-label">
            R
          </label>
          <input
            type="text"
            id="red-input"
            name="red-input"
            data-testid="red-input"
            value={rgb[0]}
            onChange={(event) =>
              onChangeRgb([event.target.value, rgb[1], rgb[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 mx-2">
          <label htmlFor="green-input" className="input-label">
            G
          </label>
          <input
            type="text"
            id="green-input"
            name="green-input"
            data-testid="green-input"
            value={rgb[1]}
            onChange={(event) =>
              onChangeRgb([rgb[0], event.target.value, rgb[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="blue-input" className="input-label">
            B
          </label>
          <input
            type="text"
            id="blue-input"
            name="blue-input"
            data-testid="blue-input"
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
          <label htmlFor="hex-input" className="input-label">
            Hex
          </label>
          <input
            type="text"
            id="hex-input"
            name="hex-input"
            data-testid="hex-input"
            value={hex}
            minLength={6}
            maxLength={6}
            onChange={(event) => onChangeHex(event.target.value)}
            className="input-field-text"
          />
        </div>
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
