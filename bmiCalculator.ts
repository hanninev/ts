function calculateBmi(heightCm: number, weightKg: number): string {
    const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
  
    if (bmi < 18.5) {
      return `Over normal range`;
    } else if (bmi >= 18.5 && bmi < 25) {
      return `Normal range`;
    } else if (bmi >= 25 && bmi < 30) {
      return `Overweight`;
    } else {
      return `Very much above normal range`;
    }
  }

  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Please provide two arguments');
  }

  const [heightArg, weightArg] = args;
  
  const heightInCm = Number(heightArg);
  const weightInKg = Number(weightArg);
  
  console.log(calculateBmi(heightInCm, weightInKg));