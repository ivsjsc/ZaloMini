import type { Curriculum } from '../types';
import { smStarterData } from './sm-starter';
import { sm1Data } from './sm1';
import { sm2Data } from './sm2';
import { sm3Data } from './sm3';
import { sm4Data } from './sm4';

export const curriculumData: Curriculum = [
  {
    category: { en: 'Primary IVS-Mastery', vi: 'Tiểu học IVS-Mastery' },
    levels: [
      smStarterData,
      sm1Data,
      sm2Data,
      sm3Data,
      sm4Data,
    ],
  },
];

export default curriculumData;
