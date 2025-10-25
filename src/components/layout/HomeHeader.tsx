import React, { FC } from "react";
import { Box, Header, Text } from "zmp-ui";
import Logo from "@assets/logo.png";
import TextItemSkeleton from "@components/skeleton/TextSketeton";
import { useStore } from "@store";

export interface HomeHeaderProps {
    title: string;
    name: string;
}

const HomeHeader: FC<HomeHeaderProps> = props => {
    const { title = "English Learners", name = "K-12 Curriculum" } = props;
    const loading = useStore(state => state.gettingOrganization);
    return (
        <Header className="!bg-primary" title={title}>
            {/* 
                Sử dụng children để đặt các phần tử phức tạp hơn.
                Phần này sẽ được hiển thị bên dưới title.
            */}
            <Box flex alignItems="center" className="space-x-2">
                <img className="w-8 h-8" src={Logo} alt="Logo" />
                {loading ? (
                    <TextItemSkeleton width={120} />
                ) : (
                    <Text size="xxSmall" className="text-white/80">
                        {name}
                    </Text>
                )}
            </Box>
        </Header>
    );
};

export default HomeHeader;
