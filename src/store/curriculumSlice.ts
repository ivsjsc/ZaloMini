import { AppError, CurriculumCategory, CurriculumLevel, Lesson, Unit } from "@dts";
import { StateCreator } from "zustand";
import { getCategories, getCategoryData } from "../../data/curriculumService";

export interface CurriculumSlice {
    categories: { key: string; en: string; vi: string }[];
    currentCategory: CurriculumCategory | null;
    currentLevel: CurriculumLevel | null;
    currentUnit: Unit | null;
    currentLesson: Lesson | null;
    loading: boolean;
    error?: AppError;

    // Actions
    loadCategories: () => Promise<void>;
    loadCategory: (categoryKey: string) => Promise<void>;
    setCurrentLevel: (level: CurriculumLevel) => void;
    setCurrentUnit: (unit: Unit) => void;
    setCurrentLesson: (lesson: Lesson) => void;
    clearError: () => void;
}

const curriculumSlice: StateCreator<CurriculumSlice> = (set) => ({
    categories: [],
    currentCategory: null,
    currentLevel: null,
    currentUnit: null,
    currentLesson: null,
    loading: false,
    error: undefined,

    loadCategories: async () => {
        set({ loading: true, error: undefined });
        try {
            const categories = await getCategories();
            set({ categories, loading: false });
        } catch (error) {
            set({ error: { message: 'Failed to load categories' }, loading: false });
        }
    },

    loadCategory: async (categoryKey: string) => {
        set({ loading: true, error: undefined });
        try {
            const category = await getCategoryData(categoryKey);
            if (category) {
                set({ currentCategory: category, loading: false });
            } else {
                set({ error: { message: 'Category not found' }, loading: false });
            }
        } catch (error) {
            set({ error: { message: 'Failed to load category' }, loading: false });
        }
    },

    setCurrentLevel: (level: CurriculumLevel) => {
        set({ currentLevel: level, currentUnit: null, currentLesson: null });
    },

    setCurrentUnit: (unit: Unit) => {
        set({ currentUnit: unit, currentLesson: null });
    },

    setCurrentLesson: (lesson: Lesson) => {
        set({ currentLesson: lesson });
    },

    clearError: () => {
        set({ error: undefined });
    },
});

export default curriculumSlice;