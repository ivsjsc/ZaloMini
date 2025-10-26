import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box } from "zmp-ui";
import { Input, Button } from "@components";

const Container = styled(Box)`
    ${tw`w-full rounded-lg p-4`}
    background: rgba(20,25,20,0.7);
    border: 1px solid rgba(255, 255, 255, 0.04);
`;

const Row = styled.div`
    ${tw`flex items-center gap-2`}
`;

const Label = styled.div`
    ${tw`text-gray-300 text-sm mb-2`}
`;

const QuickAiChat: React.FC = () => {
    const [q, setQ] = useState("");

    const handleAsk = () => {
        // placeholder: integrate real AI API later
        // For now, just clear the input to show interaction
        setQ("");
    };

    return (
        <Container>
            <Label>Quick AI Chat (Low Latency)</Label>
            <Row>
                <Input
                    value={q}
                    onChange={e => setQ((e as any).target.value)}
                    placeholder="Ask a quick question..."
                />
                <Button onClick={handleAsk} className="ml-2">
                    Ask
                </Button>
            </Row>
        </Container>
    );
};

export default QuickAiChat;
