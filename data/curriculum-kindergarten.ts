import type { Curriculum } from '../types';
import { goaldigger1Data } from './gd1';
import { goaldigger2Data } from './gd2';
import { goaldigger3Data } from './gd3';
import { goaldigger4Data } from './gd4';

export const curriculumData: Curriculum = [
  {
    category: { en: 'Kindergarten IVS-Mastery', vi: 'Mầm non IVS-Mastery' },
    levels: [
      goaldigger1Data,
      goaldigger2Data,
      goaldigger3Data,
      goaldigger4Data,
    ],
  },
];

export default curriculumData;
