/**
 * Calculate Body Mass Index (BMI)
 * @param weight weight in kilograms
 * @param height height in meters
 * @returns BMI value
 * @throws Error if weight or height is zero or negative
 */
export function calculateBmi(weight: number, height: number): number {
  /*
  if (weight <= 0) {
    throw new Error("Weight must be greater than zero");
  }
  if (height <= 0) {
    throw new Error("Height must be greater than zero");
  }
  */
  return weight / (height * height);
}

/**
 * Categorize BMI value
 * @param bmi BMI value
 * @returns Category string
 */
export function categorizeBmi(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  if (bmi < 35) return "Obesity class I";
  if (bmi < 40) return "Obesity class II";
  return "Obesity class III";
}
