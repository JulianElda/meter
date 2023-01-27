import { useEffect, useState } from "react";
import { ROUNDING } from "consts";
import Input from "components/form/input";

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
    setContrast(calculateContrast(rgb1, rgb2).toFixed(ROUNDING));
  }, [rgb1, rgb2]);

  return (
    <div>
      <div className="flex my-2 space-x-2">
        <Input
          id="red-input1"
          label="R"
          value={rgb1[0]}
          onChange={(value) => setRgb1([value, rgb1[1], rgb1[2]])}
        />
        <Input
          id="green-input1"
          label="G"
          value={rgb1[1]}
          onChange={(value) => setRgb1([rgb1[0], value, rgb1[2]])}
        />
        <Input
          id="blue-input1"
          label="B"
          value={rgb1[2]}
          onChange={(value) => setRgb1([rgb1[0], rgb1[1], value])}
        />
      </div>
      <div className="flex my-2 space-x-2">
        <Input
          id="red-input2"
          label="R"
          value={rgb2[0]}
          onChange={(value) => setRgb2([value, rgb2[1], rgb2[2]])}
        />
        <Input
          id="green-input2"
          label="G"
          value={rgb2[1]}
          onChange={(value) => setRgb2([rgb2[0], value, rgb2[2]])}
        />
        <Input
          id="blue-input1"
          label="B"
          value={rgb2[2]}
          onChange={(value) => setRgb2([rgb2[0], rgb2[1], value])}
        />
      </div>
      <div>{contrast}</div>
    </div>
  );
}
