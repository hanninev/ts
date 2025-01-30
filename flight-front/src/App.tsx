import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { createDiary, getAllDiaries } from './services/diaryService';
import { DiaryEntry, NewDiaryEntry } from './types.tsx';
import axios from 'axios';

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [newDiary, setNewDiary] = useState<NewDiaryEntry>({
    date: '',
    weather: '',
    visibility: '',
    comment: ''
  });

  useEffect(() => {
    void fetchDiaries();
  }, []);

  const fetchDiaries = async () => {
    try {
      const data = await getAllDiaries();
      setDiaries(data);
    } catch (error) {
      console.error('Error fetching diaries:', error);
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewDiary({
      ...newDiary,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const created = await createDiary(newDiary);
      setDiaries((prev) => [...prev, created]);
      setNewDiary({
        date: '',
        weather: '',
        visibility: '',
        comment: ''
      });
      setError(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data || 'An unknown axios error occurred');
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <h2>Add new entry</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            date:
            <input
              type="date"
              name="date"
              value={newDiary.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
        <fieldset>
          <legend>Visibility</legend>
          <input
            type="radio"
            id="great"
            name="visibility"
            value="great"
            checked={newDiary.visibility === 'great'}
            onChange={handleChange}
          />
          <label htmlFor="great">Great</label>
          <input
            type="radio"
            id="good"
            name="visibility"
            value="good"
            checked={newDiary.visibility === 'good'}
            onChange={handleChange}
          />
          <label htmlFor="good">Good</label>
          <input
            type="radio"
            id="ok"
            name="visibility"
            value="ok"
            checked={newDiary.visibility === 'ok'}
            onChange={handleChange}
          />
          <label htmlFor="ok">Ok</label>
          <input
            type="radio"
            id="poor"
            name="visibility"
            value="poor"
            checked={newDiary.visibility === 'poor'}
            onChange={handleChange}
          />
          <label htmlFor="poor">Poor</label>
        </fieldset>
        </div>
        <div>
        <fieldset>
          <legend>Weather</legend>
          <input
            type="radio"
            id="sunny"
            name="weather"
            value="sunny"
            checked={newDiary.weather === 'sunny'}
            onChange={handleChange}
          />
          <label htmlFor="sunny">Sunny</label>
          <input
            type="radio"
            id="rainy"
            name="weather"
            value="rainy"
            checked={newDiary.weather === 'rainy'}
            onChange={handleChange}
          />
          <label htmlFor="rainy">Rainy</label>
          <input
            type="radio"
            id="cloudy"
            name="weather"
            value="cloudy"
            checked={newDiary.weather === 'cloudy'}
            onChange={handleChange}
          />
          <label htmlFor="cloudy">Cloudy</label>
          <input
            type="radio"
            id="stormy"
            name="weather"
            value="stormy"
            checked={newDiary.weather === 'stormy'}
            onChange={handleChange}
          />
          <label htmlFor="stormy">Stormy</label>
          <input
            type="radio"
            id="windy"
            name="weather"
            value="windy"
            checked={newDiary.weather === 'windy'}
            onChange={handleChange}
          />
          <label htmlFor="windy">Windy</label>
        </fieldset>
        </div>
        <div>
          <label>
            Comment:
            <input
              name="comment"
              value={newDiary.comment}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Add Entry</button>
      </form>

      <h1>Diary Entries</h1>
      <ul>
        {diaries.map(diary => (
          <li key={diary.id}>
            <p>
              <strong>{diary.date}</strong>{' '}
              <em>(weather: {diary.weather}, visibility: {diary.visibility})</em>
            </p>
            {diary.comment && <p>Comment: {diary.comment}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;