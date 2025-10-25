import type { Curriculum } from '../types';
import { g10Data } from './g10';
import { g11Data } from './g11';
import { g12Data } from './g12';

export const curriculumData: Curriculum = [
  {
    category: { en: 'High School', vi: 'Trung học phổ thông' },
    levels: [
      g10Data,
      g11Data,
      g12Data,
    ],
  },
];

export default curriculumData;
