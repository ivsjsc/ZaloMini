
# ENGLISH Learners - Zalo Mini App

## Table of Contents

- [Overview](#overview)
- [Curriculum Features](#curriculum-features)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

## Overview

ENGLISH Learners là ứng dụng học tiếng Anh dành cho học sinh Việt Nam, xây dựng trên nền tảng Zalo Mini App. Ứng dụng cung cấp curriculum đa cấp học, bài học tương tác, video, audio, và hệ thống theo dõi tiến độ học tập. Giao diện tuân thủ đầy đủ các guideline của Zalo Mini App, tối ưu cho mobile và desktop.

### Demo

Scan QR này bằng Zalo để xem thử ENGLISH Learners Mini App

![QR!](/readme-assets/qr.png)


## Curriculum Features

- Curriculum đa cấp học: kindergarten, primary, secondary, high school
- Mỗi lesson có: title, description, aims, vocabulary, grammar, activities, video, exercises
- Tích hợp audio phát âm, video minh họa, bài tập trắc nghiệm
- Theo dõi tiến độ học tập, cấp badge khi hoàn thành
- Đa ngôn ngữ: English/Vietnamese

## Project Structure

```shell
.
├── src
│   ├── components
│   │   ├── curriculum/         # Lesson, Unit, Exercise, Video, Audio components
│   │   ├── layout/             # AppBar, BottomNav, PageLayout
│   │   ├── common/             # Common UI elements
│   ├── pages/                  # Home, LessonDetail, UnitDetail, Profile, etc.
│   ├── service/                # API, Zalo SDK, curriculum data
│   ├── store/                  # Zustand state slices
│   ├── constants/              # API endpoints, curriculum constants
│   ├── utils/                  # Utility functions
│   ├── types/                  # TypeScript types
│   ├── css/                    # Tailwind, global styles
│   ├── assets/                 # Images, icons, videos
│   ├── mock/                   # Fake data for UI testing
├── app-config.json             # Zalo Mini App config
├── manifest.json               # Zalo Mini App manifest
├── .env, .env.production, .env.development
├── package.json
└── README.md
```

- **src/components/curriculum**: Các component cho lesson, unit, exercise, video, audio
- **src/pages**: Các trang chính của app
- **src/service/zalo.ts**: Tích hợp Zalo SDK, lấy user info, authentication
- **src/store**: Quản lý state bằng Zustand
- **src/constants**: Định nghĩa API endpoint, curriculum constants
- **src/assets**: Hình ảnh, icon, video


## State Management

Sử dụng [Zustand](https://github.com/pmndrs/zustand) để quản lý state, chia thành các slice:

- **authSlice**: Đăng nhập, thông tin người dùng (qua Zalo SDK)
- **appSlice**: Thông báo, theme, cài đặt chung
- **curriculumSlice**: Dữ liệu curriculum, tiến độ học tập
- **feedbackSlice**: Quản lý feedback
- **profileSlice**: Thông tin cá nhân, badge

Code quản lý state nằm ở `/src/store`.


## Installation

1. Cài đặt [Node.js](https://nodejs.org)
2. Mở terminal và chuyển đến thư mục dự án
3. Cài đặt dependencies:
    ```shell
    npm install
    ```


## Configuration

- Sửa API base URL trong các file `.env.production`, `.env.development` (`VITE_BASE_URL`)
- Định nghĩa endpoint trong `src/constants/common.ts` cho curriculum, lesson, feedback, v.v.
- Cập nhật `APP_ID` trong `.env` với Zalo Mini App ID


## Scripts

- `npm run dev`: Chạy app ở chế độ phát triển
- `npx zmp start`: Preview Zalo Mini App trên dev server (http://localhost:3000)
- `npm run build`: Build app cho production


## Deployment

1. Build app: `npm run build`
2. Upload lên Zalo Developer Console
3. Cấu hình app (name, description, icon, quyền truy cập)
4. Test trên Zalo app, beta test với người dùng
5. Submit for review và publish

## License

ENGLISH Learners - Zalo Mini App © 2025
