import React, { useEffect } from "react";
import { useStore } from "@store";
import PageLayout from "@components/layout/PageLayout";
import { Box, Text, List } from "zmp-ui";
import { useNavigate, useParams } from "react-router-dom";

const UnitDetail: React.FC = () => {
    const navigate = useNavigate();
    const { categoryKey, levelId, unitId } =
        useParams<{ categoryKey: string; levelId: string; unitId: string }>();
    const {
        currentCategory,
        currentLevel,
        currentUnit,
        loading,
        error,
        loadCategory,
        setCurrentLevel,
        setCurrentUnit,
    } = useStore(state => ({
        currentCategory: state.currentCategory,
        currentLevel: state.currentLevel,
        currentUnit: state.currentUnit,
        loading: state.loading,
        error: state.error,
        loadCategory: state.loadCategory,
        setCurrentLevel: state.setCurrentLevel,
        setCurrentUnit: state.setCurrentUnit,
    }));

    useEffect(() => {
        if (categoryKey && !currentCategory) {
            loadCategory(categoryKey);
        }
        if (currentCategory && levelId) {
            const level = currentCategory.levels.find(
                l => l.level.toString() === levelId,
            );
            if (level) {
                setCurrentLevel(level);
            }
        }
        if (currentLevel && unitId) {
            const unit = currentLevel.units.find(
                u => u.id.toString() === unitId,
            );
            if (unit) {
                setCurrentUnit(unit);
            }
        }
    }, [categoryKey, levelId, unitId, currentCategory, currentLevel]);

    const handleLessonClick = (lesson: any) => {
        navigate(
            `/curriculum/${categoryKey}/level/${levelId}/unit/${unitId}/lesson/${lesson.id}`,
        );
    };

    if (loading) {
        return (
            <PageLayout id="unit-detail-page">
                <Box p={4}>
                    <Text.Title>Loading unit...</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout id="unit-detail-page">
                <Box p={4}>
                    <Text.Title color="red">Error: {error.message}</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (!currentUnit) {
        return (
            <PageLayout id="unit-detail-page">
                <Box p={4}>
                    <Text.Title>Unit not found</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    return (
        <PageLayout id="unit-detail-page">
            <Box p={4}>
                <Text.Title>{currentUnit.title.en}</Text.Title>
                <Text>{currentUnit.title.vi}</Text>
                <Box mt={4}>
                    <List>
                        {currentUnit.lessons.map(lesson => (
                            <List.Item
                                key={lesson.id}
                                onClick={() => handleLessonClick(lesson)}
                            >
                                <Box p={3}>
                                    <Text.Title size="small">
                                        {lesson.title.en}
                                    </Text.Title>
                                    <Text>{lesson.title.vi}</Text>
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Box>
            </Box>
        </PageLayout>
    );
};

export default UnitDetail;
