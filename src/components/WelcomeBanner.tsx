import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Text } from "zmp-ui";

const BannerContainer = styled(Box)`
    ${tw`bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg mb-4`};
    background: linear-gradient(135deg, #1976D2 0%, #42A5F5 100%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const WelcomeBanner: React.FC = () => (
    <BannerContainer>
        <Text.Title size="large" className="text-white mb-2">
            Welcome to ENGLISH Learners!
        </Text.Title>
        <Text size="small" className="text-blue-100">
            Học tiếng Anh hiệu quả với curriculum đa cấp học, bài học tương tác và theo dõi tiến độ.
        </Text>
    </BannerContainer>
);

export default WelcomeBanner;