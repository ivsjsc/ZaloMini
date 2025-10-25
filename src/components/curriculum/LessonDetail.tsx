import React, { useEffect } from "react";
import { useStore } from "@store";
import PageLayout from "@components/layout/PageLayout";
import { Box, Text, List } from "zmp-ui";
import { useParams } from "react-router-dom";

const LessonDetail: React.FC = () => {
    const { categoryKey, levelId, unitId, lessonId } =
        useParams<{
            categoryKey: string;
            levelId: string;
            unitId: string;
            lessonId: string;
        }>();
    const {
        currentCategory,
        currentLevel,
        currentUnit,
        currentLesson,
        loading,
        error,
        loadCategory,
        setCurrentLevel,
        setCurrentUnit,
        setCurrentLesson,
    } = useStore(state => ({
        currentCategory: state.currentCategory,
        currentLevel: state.currentLevel,
        currentUnit: state.currentUnit,
        currentLesson: state.currentLesson,
        loading: state.loading,
        error: state.error,
        loadCategory: state.loadCategory,
        setCurrentLevel: state.setCurrentLevel,
        setCurrentUnit: state.setCurrentUnit,
        setCurrentLesson: state.setCurrentLesson,
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
        if (currentUnit && lessonId) {
            const lesson = currentUnit.lessons.find(
                l => l.id.toString() === lessonId,
            );
            if (lesson) {
                setCurrentLesson(lesson);
            }
        }
    }, [
        categoryKey,
        levelId,
        unitId,
        lessonId,
        currentCategory,
        currentLevel,
        currentUnit,
    ]);

    if (loading) {
        return (
            <PageLayout id="lesson-detail-page">
                <Box p={4}>
                    <Text.Title>Loading lesson...</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout id="lesson-detail-page">
                <Box p={4}>
                    <Text.Title color="red">Error: {error.message}</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (!currentLesson) {
        return (
            <PageLayout id="lesson-detail-page">
                <Box p={4}>
                    <Text.Title>Lesson not found</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    return (
        <PageLayout id="lesson-detail-page">
            <Box p={4}>
                <Text.Title>{currentLesson.title.en}</Text.Title>
                <Text>{currentLesson.title.vi}</Text>

                <Box mt={4}>
                    <Text.Title size="small">Learning Aims</Text.Title>
                    <List>
                        {currentLesson.aims.en.map((aim, index) => (
                            <List.Item key={index}>
                                <Text>{aim}</Text>
                            </List.Item>
                        ))}
                    </List>
                </Box>

                <Box mt={4}>
                    <Text.Title size="small">Vocabulary</Text.Title>
                    <List>
                        {currentLesson.vocabulary.map((vocab, index) => (
                            <List.Item key={index}>
                                <Box>
                                    <Text.Title size="small">
                                        {vocab.term}
                                    </Text.Title>
                                    <Text>
                                        {vocab.pronunciation} -{" "}
                                        {vocab.vietnamese}
                                    </Text>
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Box>

                <Box mt={4}>
                    <Text.Title size="small">Grammar</Text.Title>
                    <List>
                        {currentLesson.grammar.map((gram, index) => (
                            <List.Item key={index}>
                                <Box>
                                    <Text.Title size="small">
                                        {gram.title.en}
                                    </Text.Title>
                                    <Text>{gram.title.vi}</Text>
                                    <List>
                                        {gram.explanation.en.map((exp, i) => (
                                            <List.Item key={i}>
                                                <Text size="small">{exp}</Text>
                                            </List.Item>
                                        ))}
                                    </List>
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Box>

                <Box mt={4}>
                    <Text.Title size="small">Activities</Text.Title>
                    <List>
                        {currentLesson.activities.map((activity, index) => (
                            <List.Item key={index}>
                                <Box>
                                    <Text.Title size="small">
                                        {activity.type}
                                    </Text.Title>
                                    <List>
                                        {activity.description.en.map(
                                            (desc, i) => (
                                                <List.Item key={i}>
                                                    <Text size="small">
                                                        {desc}
                                                    </Text>
                                                </List.Item>
                                            ),
                                        )}
                                    </List>
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Box>
            </Box>
        </PageLayout>
    );
};

export default LessonDetail;
