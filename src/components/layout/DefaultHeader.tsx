import React, { FC } from "react";
import { Header, Icon } from "zmp-ui";

export interface DefaultHeaderProps {
    title?: string;
    back?: boolean;
}

const DefaultHeader: FC<DefaultHeaderProps> = props => {
    const { title = "English Learners", back } = props;
    return (
        <Header
            title={title}
            backIcon={<Icon icon="zi-arrow-left" />}
            showBackIcon={back}
        />
    );
};

export default DefaultHeader;
