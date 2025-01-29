import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query;

    if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
      return res.status(400).json({
        error: 'malformatted parameters'
      });
    }
    const h = Number(height);
    const w = Number(weight);
    const bmi = calculateBmi(h, w);
    
    return res.json({
      weight: w,
      height: h,
      bmi,
    });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).json({
      error: 'parameters missing'
    });
  }

  if (isNaN(Number(target)) || !Array.isArray(daily_exercises)) {
    return res.status(400).json({
      error: 'malformatted parameters'
    });
  }

const result = calculateExercises(daily_exercises as number[], target as number);

  return res.send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});