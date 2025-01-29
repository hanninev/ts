interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  export function calculateExercises(dailyExerciseHours: number[], targetDailyHours: number): ExerciseResult {
    const periodLength = dailyExerciseHours.length;
    const trainingDays = dailyExerciseHours.filter((hours) => hours > 0).length;
    const totalHours = dailyExerciseHours.reduce((acc, curr) => acc + curr, 0);
    const average = totalHours / periodLength;
    
    const success = average >= targetDailyHours;
    
    let rating: number;
    let ratingDescription: string;
    
    if (average >= targetDailyHours) {
      rating = 3;
      ratingDescription = 'you hit your target';
    } else if (average >= targetDailyHours * 0.5) {
      rating = 2;
      ratingDescription = 'not too bad but could be better';
    } else {
      rating = 1;
      ratingDescription = 'so bad, you need to do better';
    }
    
    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target: targetDailyHours,
      average
    };
  }

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Please provide two arguments');
}

const [targetArg, ...exerciseArgs] = args;

const target = Number(targetArg);

const dailyExercises: number[] = exerciseArgs.map(val => {
  return Number(val);
});

console.log(calculateExercises(dailyExercises, target));
  