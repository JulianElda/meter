import { ROUNDING } from "@/src/constants/common";

export const toFixedRounding = function (amount: number): number {
  const rounder = Math.pow(10, ROUNDING);
  return Math.round(amount * rounder) / rounder;
};
