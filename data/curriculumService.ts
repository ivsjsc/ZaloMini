import { Curriculum, CurriculumCategory, CurriculumLevel, Lesson, Unit } from '../types';

// These map to the filenames: curriculum-kindergarten.ts, etc.
const categoryLoaders: Record<string, () => Promise<{ default: Curriculum }>> = {
  'kindergarten-ivs-mastery': () => import('./curriculum-kindergarten'),
  'primary-ivs-mastery': () => import('./curriculum-primary'),
  'secondary-ivs-mastery': () => import('./curriculum-secondary'),
  'high-school': () => import('./curriculum-highschool'),
};

// This is the static, lightweight list of categories to display on the Programs page.
const categories = [
    { key: 'kindergarten-ivs-mastery', en: 'Kindergarten IVS-Mastery', vi: 'Mầm non IVS-Mastery' },
    { key: 'primary-ivs-mastery', en: 'Primary IVS-Mastery', vi: 'Tiểu học IVS-Mastery' },
    { key: 'secondary-ivs-mastery', en: 'Secondary IVS-Mastery', vi: 'Trung học IVS-Mastery' },
    { key: 'high-school', en: 'High School', vi: 'Trung học phổ thông' },
];

export const getCategories = async () => {
    return categories;
};

// A cache to avoid re-fetching data chunks
const cache: Record<string, CurriculumCategory> = {};

export const getCategoryData = async (categoryKey: string): Promise<CurriculumCategory | null> => {
    if (cache[categoryKey]) {
        return cache[categoryKey];
    }
    const loader = categoryLoaders[categoryKey];
    if (!loader) {
        console.error(`No loader found for category key: ${categoryKey}`);
        return null;
    }
    try {
        const module = await loader();
        const curriculumData = module.default;
        const categoryData = curriculumData[0]; // Each file contains one category
        if (categoryData) {
            cache[categoryKey] = categoryData;
        }
        return categoryData;
    } catch (error) {
        console.error(`Failed to load data for category: ${categoryKey}`, error);
        return null;
    }
};

export const findUnit = async (
    categoryTitle: string, 
    levelTitle: string, 
    unitId: string
): Promise<{ unit: Unit | null; category: CurriculumCategory | null; level: CurriculumLevel | null; categoryKey: string | null }> => {
    const categoryInfo = categories.find(c => c.en === categoryTitle);
    const categoryKey = categoryInfo?.key;

    if (!categoryKey) {
        return { unit: null, category: null, level: null, categoryKey: null };
    }

    const categoryData = await getCategoryData(categoryKey);
    if (!categoryData) {
        return { unit: null, category: null, level: null, categoryKey: null };
    }

    const level = categoryData.levels.find(l => l.title.en === levelTitle);
    const unit = level?.units.find(u => String(u.id) === unitId);
    
    return { unit: unit || null, category: categoryData, level: level || null, categoryKey: categoryKey };
};


export const findLesson = async (
    categoryTitle: string, 
    levelTitle: string, 
    unitId: string, 
    lessonId: string
): Promise<{ lesson: Lesson | null; category: CurriculumCategory | null; level: CurriculumLevel | null }> => {
    
    // The URL parameters from react-router's useParams are already decoded.
    // We compare them directly with the raw data titles.
    const categoryKey = categories.find(c => c.en === categoryTitle)?.key;

    if (!categoryKey) {
        return { lesson: null, category: null, level: null };
    }

    const categoryData = await getCategoryData(categoryKey);
    if (!categoryData) {
        return { lesson: null, category: null, level: null };
    }

    const level = categoryData.levels.find(l => l.title.en === levelTitle);
    const unit = level?.units.find(u => String(u.id) === unitId);
    const lesson = unit?.lessons.find(l => String(l.id) === lessonId);
    
    return { lesson: lesson || null, category: categoryData, level: level || null };
};