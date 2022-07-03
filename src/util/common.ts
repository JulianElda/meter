export const ROUNDING: number = 3;

export const isValidNumber = function (value: string) {
  if (value === "") return false;
  else if (isNaN(Number(value))) return false;
  else return true;
};
