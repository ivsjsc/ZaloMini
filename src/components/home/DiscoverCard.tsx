import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon } from "zmp-ui";

const Card = styled(Box)`
    ${tw`w-full flex items-center justify-between p-4 rounded-lg`}
    background: rgba(20,25,20,0.7);
    border: 1px solid rgba(255, 255, 255, 0.04);
`;

const Left = styled.div`
    ${tw`flex items-center`}
`;

const IconCircle = styled.div`
    ${tw`flex items-center justify-center rounded-full w-12 h-12 mr-4`}
    background: rgba(255,255,255,0.03);
`;

const Content = styled.div`
    ${tw`flex flex-col`}
`;

const Title = styled.div`
    ${tw`text-white font-semibold text-base`}
`;

const Subtitle = styled.div`
    ${tw`text-gray-300 text-sm`}
`;

interface DiscoverCardProps {
    icon?: string;
    title: string;
    subtitle?: string;
    onClick?: () => void;
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({
    icon = "zi-book",
    title,
    subtitle,
    onClick,
}) => (
    <Card onClick={onClick} p={3} className="discover-card">
        <Left>
            <IconCircle>
                <Icon icon={icon as any} className="text-white" />
            </IconCircle>
            <Content>
                <Title>{title}</Title>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </Content>
        </Left>
        <div>
            <Icon icon="zi-chevron-right" className="text-gray-300" />
        </div>
    </Card>
);

export default DiscoverCard;
