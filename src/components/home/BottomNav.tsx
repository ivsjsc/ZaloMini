import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon } from "zmp-ui";

const Nav = styled(Box)`
    ${tw`w-full flex justify-around items-center py-2`}
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background: rgba(10, 12, 10, 0.9);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.04);
`;

const Item = styled.div`
    ${tw`flex flex-col items-center text-gray-300 text-xs`}
`;

const BottomNav: React.FC = () => (
    <Nav>
        <Item>
            <Icon icon={"zi-home" as any} />
            <div>Home</div>
        </Item>
        <Item>
            <Icon icon={"zi-book" as any} />
            <div>Programs</div>
        </Item>
        <Item>
            <Icon icon={"zi-chat" as any} />
            <div>AI Chat</div>
        </Item>
        <Item>
            <Icon icon={"zi-calendar" as any} />
            <div>Schedule</div>
        </Item>
        <Item>
            <Icon icon={"zi-user" as any} />
            <div>Profile</div>
        </Item>
    </Nav>
);

export default BottomNav;
