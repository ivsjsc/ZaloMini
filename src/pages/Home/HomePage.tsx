import React from "react";
import { Utinities, ListOA } from "@components";
import PageLayout from "@components/layout/PageLayout";
import { APP_UTINITIES } from "@constants/utinities";
import WelcomeBanner from "@components/WelcomeBanner";
import Contacts from "./Contacts";
import Procedures from "./Procedures";

const HomePage: React.FunctionComponent = () => (
    <PageLayout id="home-page" customHeader={<div />}>
        <WelcomeBanner />
        <Utinities utinities={APP_UTINITIES} />
        <ListOA />
        <Contacts />
        <Procedures />
    </PageLayout>
);

export default HomePage;
