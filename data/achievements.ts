import { Achievement, Badge } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  // Lesson Achievements
  {
    id: 'first_lesson',
    title: { en: 'First Steps', vi: 'Bước Đầu Tiên' },
    description: { en: 'Complete your first lesson', vi: 'Hoàn thành bài học đầu tiên' },
    icon: '🎓',
    type: 'lesson',
    requirement: 1,
    xpReward: 50,
  },
  {
    id: 'lesson_master',
    title: { en: 'Lesson Master', vi: 'Bậc Thầy Bài Học' },
    description: { en: 'Complete 10 lessons', vi: 'Hoàn thành 10 bài học' },
    icon: '📚',
    type: 'lesson',
    requirement: 10,
    xpReward: 200,
  },
  {
    id: 'lesson_expert',
    title: { en: 'Lesson Expert', vi: 'Chuyên Gia Bài Học' },
    description: { en: 'Complete 50 lessons', vi: 'Hoàn thành 50 bài học' },
    icon: '🎯',
    type: 'lesson',
    requirement: 50,
    xpReward: 500,
  },

  // Streak Achievements
  {
    id: 'streak_3',
    title: { en: 'Consistent Learner', vi: 'Người Học Kiên Trì' },
    description: { en: 'Maintain a 3-day learning streak', vi: 'Duy trì chuỗi học 3 ngày' },
    icon: '🔥',
    type: 'streak',
    requirement: 3,
    xpReward: 75,
  },
  {
    id: 'streak_7',
    title: { en: 'Week Warrior', vi: 'Chiến Binh Tuần' },
    description: { en: 'Maintain a 7-day learning streak', vi: 'Duy trì chuỗi học 7 ngày' },
    icon: '⚡',
    type: 'streak',
    requirement: 7,
    xpReward: 150,
  },
  {
    id: 'streak_30',
    title: { en: 'Monthly Champion', vi: 'Vô Địch Hàng Tháng' },
    description: { en: 'Maintain a 30-day learning streak', vi: 'Duy trì chuỗi học 30 ngày' },
    icon: '👑',
    type: 'streak',
    requirement: 30,
    xpReward: 1000,
  },

  // XP Achievements
  {
    id: 'xp_1000',
    title: { en: 'Knowledge Seeker', vi: 'Người Tìm Kiến Kiến Thức' },
    description: { en: 'Earn 1000 XP', vi: 'Kiếm được 1000 XP' },
    icon: '⭐',
    type: 'xp',
    requirement: 1000,
    xpReward: 100,
  },
  {
    id: 'xp_5000',
    title: { en: 'Wisdom Collector', vi: 'Người Thu Thập Trí Tuệ' },
    description: { en: 'Earn 5000 XP', vi: 'Kiếm được 5000 XP' },
    icon: '🌟',
    type: 'xp',
    requirement: 5000,
    xpReward: 250,
  },

  // Time-based Achievements
  {
    id: 'early_bird',
    title: { en: 'Early Bird', vi: 'Chim Sáng' },
    description: { en: 'Complete a lesson before 8 AM', vi: 'Hoàn thành bài học trước 8 giờ sáng' },
    icon: '🌅',
    type: 'time',
    requirement: 1,
    xpReward: 25,
  },
];

export const BADGES: Badge[] = [
  {
    id: 'starter',
    name: { en: 'Starter', vi: 'Người Mới Bắt Đầu' },
    description: { en: 'Welcome to English Learners!', vi: 'Chào mừng đến với English Learners!' },
    icon: '🌱',
    rarity: 'common',
  },
  {
    id: 'dedicated',
    name: { en: 'Dedicated Learner', vi: 'Người Học Chuyên Cần' },
    description: { en: 'Complete 25 lessons', vi: 'Hoàn thành 25 bài học' },
    icon: '📖',
    rarity: 'rare',
  },
  {
    id: 'champion',
    name: { en: 'Learning Champion', vi: 'Vô Địch Học Tập' },
    description: { en: 'Reach level 10', vi: 'Đạt level 10' },
    icon: '🏆',
    rarity: 'epic',
  },
  {
    id: 'legend',
    name: { en: 'English Legend', vi: 'Huyền Thoại Tiếng Anh' },
    description: { en: 'Reach level 25', vi: 'Đạt level 25' },
    icon: '💎',
    rarity: 'legendary',
  },
];