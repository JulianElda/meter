export function convertBaseNumber(
  n: string,
  sourceBase: number,
  targetBase: number
) {
  if (
    typeof sourceBase !== "number" ||
    typeof targetBase !== "number" ||
    sourceBase < 2 ||
    sourceBase > 36 ||
    targetBase < 2 ||
    targetBase > 36
  ) {
    return "0";
  }

  const decimalNumber = parseInt(n, sourceBase);
  if (isNaN(decimalNumber)) {
    return "0";
  }

  return decimalNumber.toString(targetBase);
}
