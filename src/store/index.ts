import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createAppStore, { AppSlice } from "./appSlice";
import createAuthStore, { AuthSlice } from "./authSlice";
import createFeedbackSlide, { FeedbackSlice } from "./feedbackSlice";
import createInformationGuideSlide, {
    InformationGuideSlice,
} from "./informationGuideSlice";
import createOrganizationSlide, {
    OrganizationSlice,
} from "./organizationSlice";
import createScheduleSlide, { ScheduleSlice } from "./scheduleSlice";
import createProfileSlice, { ProfileSlice } from "./profileSlice";
import createCurriculumSlice, { CurriculumSlice } from "./curriculumSlice";

type State = AppSlice &
    AuthSlice &
    FeedbackSlice &
    InformationGuideSlice &
    OrganizationSlice &
    ScheduleSlice &
    ProfileSlice &
    CurriculumSlice;

export const useStore = create<State>()(
    devtools((...a) => ({
        ...createAppStore(...a),
        ...createAuthStore(...a),
        ...createFeedbackSlide(...a),
        ...createInformationGuideSlide(...a),
        ...createOrganizationSlide(...a),
        ...createScheduleSlide(...a),
        ...createProfileSlice(...a),
        ...createCurriculumSlice(...a),
    })),
);
