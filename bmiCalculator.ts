function calculateBmi(heightCm: number, weightKg: number): string {
    const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
  
    if (bmi < 18.5) {
      return `Over normal range`;
    } else if (bmi >= 18.5 && bmi < 25) {
      return `Normal range`;
    } else if (bmi >= 25 && bmi < 30) {
      return `More over normal range`;
    } else {
      return `Very much above normal range`;
    }
  }
  
  const heightInCm = 180;
  const weightInKg = 74;
  
  console.log(calculateBmi(heightInCm, weightInKg));