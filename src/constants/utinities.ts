import * as Icon from "@components/icons";
import { Utinity } from "@dts";
import SocialInsuranceLogo from "@assets/logo-social-insurance.png";
import Youtube from "@assets/youtube.png";
import Location from "@assets/location.png";
import Identification from "@assets/id-card.png";
import InternalPhone from "@assets/internal-phone.png";
import SocialInsurranceNumber from "@assets/social-insurance-number.png";
import Benefit from "@assets/benefits.png";
import Renew from "@assets/files.png";

export const APP_UTINITIES: Array<Utinity> = [
    {
        key: "curriculum",
        label: "ENGLISH Learners",
        icon: Icon.BookIcon,
        path: "/curriculum",
    },
    {
        key: "lessons",
        label: "Bài học",
        icon: Icon.BookIcon,
        path: "/lessons",
    },
    {
        key: "vocabulary",
        label: "Từ vựng",
        icon: Icon.SearchIcon,
        path: "/vocabulary",
    },
    {
        key: "exercises",
        label: "Bài tập",
        icon: Icon.PenIcon,
        path: "/exercises",
    },
    {
        key: "progress",
        label: "Tiến độ",
        icon: Icon.CalendarIcon,
        path: "/progress",
    },
    {
        key: "info",
        label: "Hướng dẫn",
        icon: Icon.BookIcon,
        path: "/information-guide",
    },
];

export const CONTACTS: Array<Utinity> = [
    {
        key: "recent-lesson-1",
        label: "Bài học: Greetings",
        link: "",
        iconSrc: SocialInsuranceLogo,
    },
    {
        key: "recent-lesson-2",
        label: "Bài học: Colors",
        link: "",
        iconSrc: SocialInsurranceNumber,
    },
    {
        key: "recent-lesson-3",
        label: "Bài học: Numbers",
        link: "",
        iconSrc: InternalPhone,
    },
    {
        key: "recent-lesson-4",
        label: "Bài học: Family",
        link: "",
        iconSrc: Location,
    },
    {
        key: "vocabulary-practice",
        label: "Luyện tập từ vựng",
        link: "",
        iconSrc: Identification,
    },
    {
        key: "youtube-lessons",
        label: "Video bài học",
        link: "",
        iconSrc: Youtube,
    },
];

export const PROCEDURES: Array<Utinity> = [
    {
        key: "badge-1",
        label: "Badge: First Lesson",
        link: "",
        iconSrc: Renew,
    },
    {
        key: "badge-2",
        label: "Badge: Vocabulary Master",
        link: "",
        iconSrc: Benefit,
    },
];
