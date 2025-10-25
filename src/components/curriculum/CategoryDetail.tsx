import React, { useEffect } from "react";
import { useStore } from "@store";
import PageLayout from "@components/layout/PageLayout";
import { Box, Text, List } from "zmp-ui";
import { useNavigate, useParams } from "react-router-dom";

const CategoryDetail: React.FC = () => {
    const navigate = useNavigate();
    const { categoryKey } = useParams<{ categoryKey: string }>();
    const { currentCategory, loading, error, loadCategory, setCurrentLevel } = useStore(state => ({
        currentCategory: state.currentCategory,
        loading: state.loading,
        error: state.error,
        loadCategory: state.loadCategory,
        setCurrentLevel: state.setCurrentLevel,
    }));

    useEffect(() => {
        if (categoryKey && !currentCategory) {
            loadCategory(categoryKey);
        }
    }, [categoryKey, currentCategory, loadCategory]);

    const handleLevelClick = (level: any) => {
        setCurrentLevel(level);
        if (level.units && level.units.length > 0) {
            navigate(`/curriculum/${categoryKey}/level/${level.level}/unit/${level.units[0].id}`);
        }
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
                        {currentCategory.levels.map((level) => (
                            <List.Item key={level.level} onClick={() => handleLevelClick(level)}>
                                <Box p={3}>
                                    <Text.Title size="small">{level.title.en}</Text.Title>
                                    <Text>{level.subtitle.en}</Text>
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