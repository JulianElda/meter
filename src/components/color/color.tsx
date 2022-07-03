import { useState } from "react";

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
          <label
            htmlFor="red"
            className="block text-sm font-medium text-gray-700">
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-1 mx-2">
          <label
            htmlFor="green"
            className="block text-sm font-medium text-gray-700">
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-1 ml-2">
          <label
            htmlFor="blue"
            className="block text-sm font-medium text-gray-700">
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="flex my-2">
        <div className="flex-1">
          <label
            htmlFor="hex"
            className="block text-sm font-medium text-gray-700">
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
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div
        className="flex mt-6 rounded-lg border-dotted border-2 border-gray-400"
        style={{ backgroundColor: "#" + hex }}
        data-testid="preview">
        &nbsp;
      </div>
    </div>
  );
}
