export function calculateBMI(height, weight) {
  if (!isValidInput(height, weight)) {
    return null;
  }
  return (weight / ((height * height) / 10000)).toFixed(2);
}

export function getBMIMessage(bmi) {
  if (bmi < 18.6) {
    return `your BMI is ${bmi} you are under weight`;
  }
  if (bmi >= 18.6 && bmi < 24.9) {
    return `your BMI is ${bmi} you are in normal range`;
  }
  return `your BMI is ${bmi} you are Overweight`;
}

function isValidInput(height, weight) {
  return !(
    height === '' || 
    height < 0 || 
    isNaN(height) || 
    weight === '' || 
    weight < 0 || 
    isNaN(weight)
  );
}