const decimalToHex = function (fromRgb: string): string {
  let result = Number.parseInt(fromRgb).toString(16);
  if (result.length === 1) {
    result = "0" + result;
  }
  return result;
};

const toRgb = function (fromHex: string): string {
  return Number.parseInt(fromHex, 16).toString();
};

export const hexToRgb = function (hexString: string): string {
  let str = hexString;
  if (str.length === 7) {
    str = str.slice(1, 7);
  }

  return [
    toRgb(str.slice(0, 2)),
    toRgb(str.slice(2, 4)),
    toRgb(str.slice(4, 6)),
  ].join(", ");
};

export const rgbToHex = function (rgbString: string): string {
  const rgbArray = rgbString.split(",").map((value) => value.trim());

  return (
    "#" +
    [
      decimalToHex(rgbArray[0]),
      decimalToHex(rgbArray[1]),
      decimalToHex(rgbArray[2]),
    ]
      .join("")
      .toUpperCase()
  );
};

export function hslToRgb(hslString: string): string {
  const hslArray = hslString.split(",").map((value) => value.trim());

  const h = Number.parseInt(hslArray[0]);
  const s = Number.parseInt(hslArray[1]?.replace("%", "")) / 100;
  const l = Number.parseInt(hslArray[2]?.replace("%", "")) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let b = 0,
    g = 0,
    r = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b].join(", ");
}

export function rgbToHSL(rgbString: string): string {
  const rgbArray = rgbString.split(",").map((value) => value.trim());

  const r = Number.parseInt(rgbArray[0]) / 255;
  const g = Number.parseInt(rgbArray[1]) / 255;
  const b = Number.parseInt(rgbArray[2]) / 255;

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  let h = 0,
    l = 0,
    s = 0;

  if (delta == 0) {
    h = 0;
  } else if (cmax == r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  if (h < 0) {
    h += 360;
  }

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return h + ", " + s + "%, " + l + "%";
}

// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
export const calculateLuminance = function (
  r: number,
  g: number,
  b: number
): number {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.039_28 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
export const calculateContrast = function (
  rgb1: string[],
  rgb2: string[]
): number {
  const lum1 = calculateLuminance(
    Number.parseInt(rgb1[0]),
    Number.parseInt(rgb1[1]),
    Number.parseInt(rgb1[2])
  );
  const lum2 = calculateLuminance(
    Number.parseInt(rgb2[0]),
    Number.parseInt(rgb2[1]),
    Number.parseInt(rgb2[2])
  );
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};
