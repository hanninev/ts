import express from 'express';
import { calculateBmi } from './bmiCalculator';

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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});