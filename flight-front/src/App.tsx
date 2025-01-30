import React, { useEffect, useState } from 'react';
import { getAllDiaries } from './services/diaryService';
import { DiaryEntry } from './types.tsx';

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

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

  return (
    <div>
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