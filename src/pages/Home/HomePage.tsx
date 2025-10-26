import React from "react";
import PageLayout from "@components/layout/PageLayout";
import WelcomeBanner from "@components/WelcomeBanner";
import DiscoverCard from "@components/home/DiscoverCard";
import QuickAiChat from "@components/home/QuickAiChat";
import BottomNav from "@components/home/BottomNav";
import { Box } from "zmp-ui";
import Procedures from "./Procedures";
import Contacts from "./Contacts";

const HomePage: React.FunctionComponent = () => {
    const discover = [
        {
            title: "Browse Programs",
            subtitle: "Explore K-12 curriculum",
            icon: "zi-book",
        },
        {
            title: "AI Chat Assistant",
            subtitle: "Practice conversation",
            icon: "zi-chat",
        },
        {
            title: "Your Profile",
            subtitle: "Track your progress",
            icon: "zi-user",
        },
        {
            title: "Testing & Placement",
            subtitle: "Take tests to determine your placement",
            icon: "zi-calendar",
        },
    ];

    return (
        <PageLayout id="home-page" customHeader={<div />}>
            <WelcomeBanner />

            <Box p={4} className="space-y-3">
                {discover.map((d, idx) => (
                    <DiscoverCard
                        key={idx}
                        icon={d.icon as any}
                        title={d.title}
                        subtitle={d.subtitle}
                    />
                ))}

                <QuickAiChat />
            </Box>

            <Contacts />
            <Procedures />

            <BottomNav />
        </PageLayout>
    );
};

export default HomePage;
