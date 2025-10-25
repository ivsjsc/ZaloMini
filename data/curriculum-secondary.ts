import type { Curriculum } from '../types';
import { sw6Data } from './sw6';
import { sw7Data } from './sw7';
import { sw8Data } from './sw8';
import { sw9Data } from './sw9';

export const curriculumData: Curriculum = [
  {
    category: { en: 'Secondary IVS-Mastery', vi: 'Trung học IVS-Mastery' },
    levels: [
      sw6Data,
      sw7Data,
      sw8Data,
      sw9Data,
    ],
  },
];

export default curriculumData;
