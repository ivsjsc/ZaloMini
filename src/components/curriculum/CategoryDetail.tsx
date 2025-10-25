import React, { useEffect } from "react";
import { useStore } from "@store";
import PageLayout from "@components/layout/PageLayout";
import { Box, Text, List } from "zmp-ui";
import { useNavigate, useParams } from "react-router-dom";

const CategoryDetail: React.FC = () => {
    const navigate = useNavigate();
    const { categoryKey } = useParams<{ categoryKey: string }>();
    const { currentCategory, loading, error, loadCategory } = useStore(
        state => ({
            currentCategory: state.currentCategory,
            loading: state.loading,
            error: state.error,
            loadCategory: state.loadCategory,
        }),
    );

    useEffect(() => {
        if (categoryKey && !currentCategory) {
            loadCategory(categoryKey);
        }
    }, [categoryKey, currentCategory]);

    // clicking level only sets current level (not required here)

    const handleUnitClick = (level: any, unit: any) => {
        // navigate to unit detail
        navigate(
            `/curriculum/${categoryKey}/level/${level.level}/unit/${unit.id}`,
        );
    };

    if (loading) {
        return (
            <PageLayout id="category-detail-page">
                <Box p={4}>
                    <Text.Title>Loading...</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout id="category-detail-page">
                <Box p={4}>
                    <Text.Title color="red">Error: {error.message}</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (!currentCategory) {
        return (
            <PageLayout id="category-detail-page">
                <Box p={4}>
                    <Text.Title>Category not found</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    return (
        <PageLayout id="category-detail-page">
            <Box p={4}>
                <Text.Title>{currentCategory.category.en}</Text.Title>
                <Text>{currentCategory.category.vi}</Text>
                <Box mt={4}>
                    <List>
                        {currentCategory.levels.map(level => (
                            <List.Item key={level.level}>
                                <Box p={3}>
                                    <Text.Title size="small">
                                        {level.title.en}
                                    </Text.Title>
                                    <Text>{level.subtitle.en}</Text>
                                    <Box mt={2}>
                                        <List>
                                            {level.units?.map(unit => (
                                                <List.Item
                                                    key={unit.id}
                                                    onClick={() =>
                                                        handleUnitClick(
                                                            level,
                                                            unit,
                                                        )
                                                    }
                                                >
                                                    <Box p={2}>
                                                        <Text size="small">
                                                            {unit.title.en}
                                                        </Text>
                                                        <Text
                                                            size="small"
                                                            className="text-text_2"
                                                        >
                                                            {unit.title.vi}
                                                        </Text>
                                                    </Box>
                                                </List.Item>
                                            ))}
                                        </List>
                                    </Box>
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Box>
            </Box>
        </PageLayout>
    );
};

export default CategoryDetail;
