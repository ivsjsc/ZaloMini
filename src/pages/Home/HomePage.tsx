import React from "react";
import { Utinities, ListOA } from "@components";
import PageLayout from "@components/layout/PageLayout";
import { APP_UTINITIES } from "@constants/utinities";
import Contacts from "./Contacts";
import Procedures from "./Procedures";
import WelcomeBanner from "@components/WelcomeBanner";

const HomePage: React.FunctionComponent = () => {
    return (
        <PageLayout id="home-page">
            <WelcomeBanner />
            <Utinities utinities={APP_UTINITIES} />
            <ListOA />
            <Contacts />
            <Procedures />
        </PageLayout>
    );
};

export default HomePage;
