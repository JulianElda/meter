import { useEffect, useState } from "react";

const DEFAULT_RGB = ["255", "255", "255"];

export default function Contrast() {
  const [rgb1, setRgb1] = useState<string[]>(DEFAULT_RGB);
  const [rgb2, setRgb2] = useState<string[]>(DEFAULT_RGB);
  const [contrast, setContrast] = useState<string>();

  // https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
  const calculateLuminance = function (r, g, b): number {
    const a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  useEffect(() => {
    const calculateContrast = function (rgb1, rgb2): number {
      const lum1 = calculateLuminance(rgb1[0], rgb1[1], rgb1[2]);
      const lum2 = calculateLuminance(rgb2[0], rgb2[1], rgb2[2]);
      const brightest = Math.max(lum1, lum2);
      const darkest = Math.min(lum1, lum2);
      return (brightest + 0.05) / (darkest + 0.05);
    };
    setContrast(calculateContrast(rgb1, rgb2).toFixed(2));
  }, [rgb1, rgb2]);

  return (
    <div>
      <div className="flex my-2">
        <div className="flex-1 mr-2">
          <label htmlFor="red-input1" className="input-label">
            R
          </label>
          <input
            type="text"
            id="red-input1"
            name="red-input1"
            data-testid="red-input1"
            value={rgb1[0]}
            onChange={(event) =>
              setRgb1([event.target.value, rgb1[1], rgb1[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 mx-2">
          <label htmlFor="green-input1" className="input-label">
            G
          </label>
          <input
            type="text"
            id="green-input1"
            name="green-input1"
            data-testid="green-input1"
            value={rgb1[1]}
            onChange={(event) =>
              setRgb1([rgb1[0], event.target.value, rgb1[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="blue-input1" className="input-label">
            B
          </label>
          <input
            type="text"
            id="blue-input1"
            name="blue-input1"
            data-testid="blue-input1"
            value={rgb1[2]}
            onChange={(event) =>
              setRgb1([rgb1[0], rgb1[1], event.target.value])
            }
            className="input-field-text"
          />
        </div>
      </div>

      <div className="flex my-2">
        <div className="flex-1 mr-2">
          <label htmlFor="red-input2" className="input-label">
            R
          </label>
          <input
            type="text"
            id="red-input2"
            name="red-input2"
            data-testid="red-input2"
            value={rgb2[0]}
            onChange={(event) =>
              setRgb2([event.target.value, rgb2[1], rgb2[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 mx-2">
          <label htmlFor="green-input2" className="input-label">
            G
          </label>
          <input
            type="text"
            id="green-input2"
            name="green-input2"
            data-testid="green-input2"
            value={rgb2[1]}
            onChange={(event) =>
              setRgb2([rgb2[0], event.target.value, rgb2[2]])
            }
            className="input-field-text"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="blue-input2" className="input-label">
            B
          </label>
          <input
            type="text"
            id="blue-input2"
            name="blue-input2"
            data-testid="blue-input2"
            value={rgb2[2]}
            onChange={(event) =>
              setRgb2([rgb2[0], rgb2[1], event.target.value])
            }
            className="input-field-text"
          />
        </div>
      </div>

      <div>{contrast}</div>
    </div>
  );
}
