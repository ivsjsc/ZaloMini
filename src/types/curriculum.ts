export type Curriculum = CurriculumCategory[];

export type CurriculumCategory = {
    category: {
        en: string;
        vi: string;
    };
    levels: CurriculumLevel[];
};

export type CurriculumLevel = {
    level: number;
    title: {
        en: string;
        vi: string;
    };
    subtitle: {
        en: string;
        vi: string;
    };
    ebookPdfUrl?: string;
    units: Unit[];
};

export type Unit = {
    id: number;
    title: {
        en: string;
        vi: string;
    };
    lessons: Lesson[];
};

export type Lesson = {
    id: number;
    title: {
        en: string;
        vi: string;
    };
    aims: {
        en: string[];
        vi: string[];
    };
    vocabulary: VocabularyItem[];
    grammar: GrammarItem[];
    activities: Activity[];
    video?: Video;
    exercises?: Exercise[];
};

export type VocabularyItem = {
    term: string;
    pronunciation: string;
    vietnamese: string;
    imageUrl?: string;
};

export type GrammarItem = {
    title: {
        en: string;
        vi: string;
    };
    explanation: {
        en: string[];
        vi: string[];
    };
};

export type Activity = {
    type: string;
    description: {
        en: string[];
        vi: string[];
    };
};

export type Video = {
    url: string;
    title: {
        en: string;
        vi: string;
    };
};

export type Exercise = {
    id: number;
    type: 'multiple-choice' | 'fill-in-the-blank' | 'matching' | 'listening';
    question: {
        en: string;
        vi: string;
    };
    options?: string[];
    correctAnswer: string;
    audioUrl?: string;
};