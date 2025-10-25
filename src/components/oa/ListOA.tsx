import React, { FC } from "react";
import styled from "styled-components";
import { Box, List, Text } from "zmp-ui";
import tw from "twin.macro";
import { OAItemSkeleton } from "@components/skeleton";
import { useStore } from "@store";
import OAItem from "./OAItem";

const ListWrapper = styled(Box)`
    ${tw`bg-white rounded-lg shadow-sm border border-gray-200 mb-4`};
`;

const SubTitle = styled(Text)`
    ${tw`text-text_2`}
`;
const ListOAStyled = styled(List)`
    padding: 8px 0;
    margin-top: 16px;
`;
const ListOA: FC<any> = () => {
    const { officialAccounts } = useStore(state => state.organization) || {
        officialAccounts: [],
    };
    const loading = useStore(state => state.gettingOrganization);

    return (
        <ListWrapper mt={2} p={4} className="section-container">
            <Text.Title size="small">Danh bạ</Text.Title>
            <SubTitle size="small">IVS JSC</SubTitle>

            <ListOAStyled>
                <Box p={3}>
                    <Text size="small">OA IVS - Giáo dục & Công nghệ</Text>
                    <Text size="small">Website IVS: ivsacademy.edu.vn</Text>
                    <Text size="small">Ứng dụng khác:</Text>
                    <Text size="small">- https://test.ivsacademy.edu.vn</Text>
                    <Text size="small">- https://eng.ivsacademy.edu.vn</Text>
                    <Text size="small">- https://kinderlink.ivsacademy.edu.vn</Text>
                </Box>
                {!loading &&
                    officialAccounts?.map(item => (
                        <OAItem key={item.oaId} officialAccount={item} />
                    ))}
                {loading && <OAItemSkeleton />}
            </ListOAStyled>
        </ListWrapper>
    );
};

export default ListOA;
