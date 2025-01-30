import axios from 'axios';
import { DiaryEntry, NewDiaryEntry } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = async (): Promise<DiaryEntry[]> => {
  const response = await axios.get<DiaryEntry[]>(baseUrl);
  return response.data;
};

export const createDiary = async (newDiary: NewDiaryEntry): Promise<DiaryEntry> => {
    const response = await axios.post<DiaryEntry>(baseUrl, newDiary);
    return response.data;
};