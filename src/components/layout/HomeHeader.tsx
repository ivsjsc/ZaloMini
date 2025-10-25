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
        <Header
            className="!bg-primary" // Sử dụng màu chính của Zalo
            title={
                (
                    <Box flex alignItems="center" className="space-x-2">
                        <img className="w-8 h-8" src={Logo} alt="Logo" />
                        <Box>
                            <Text.Title size="small" className="text-white">{title}</Text.Title>
                            {loading ? (
                                <TextItemSkeleton />
                            ) : (
                                <Text size="xxSmall" className="text-white/80">{name}</Text>
                            )}
                        </Box>
                    </Box>
                ) as unknown as string
            }
        >
            <Box flex flexDirection="column" className="text-white">
                {loading ? (
                    <TextItemSkeleton
                        color="rgba(255,255,255,0.2)"
                        height={16}
                        width={180}
                    />
                ) : (
                    <></>
                )}
            </Box>
        </Header>
    );
};

export default HomeHeader;
