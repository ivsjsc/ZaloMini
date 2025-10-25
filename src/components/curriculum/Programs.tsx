import React, { useEffect } from "react";
import { useStore } from "@store";
import PageLayout from "@components/layout/PageLayout";
import { Box, Text, List } from "zmp-ui";
import { useNavigate } from "react-router-dom";

const Programs: React.FC = () => {
    const navigate = useNavigate();
    const { categories, loading, error, loadCategories } = useStore(state => ({
        categories: state.categories,
        loading: state.loading,
        error: state.error,
        loadCategories: state.loadCategories,
    }));

    useEffect(() => {
        if (categories.length === 0) {
            loadCategories();
        }
    }, [categories.length]);

    const handleCategoryClick = (categoryKey: string) => {
        navigate(`/curriculum/${categoryKey}`);
    };

    if (loading) {
        return (
            <PageLayout id="programs-page">
                <Box p={4}>
                    <Text.Title>Loading programs...</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout id="programs-page">
                <Box p={4}>
                    <Text.Title color="red">Error: {error.message}</Text.Title>
                </Box>
            </PageLayout>
        );
    }

    return (
        <PageLayout id="programs-page">
            <Box p={4}>
                <Text.Title>ENGLISH Learners Programs</Text.Title>
                <Text>Choose a program to start learning</Text>
                <Box mt={4}>
                    <List>
                        {categories.map(category => (
                            <List.Item
                                key={category.key}
                                onClick={() =>
                                    handleCategoryClick(category.key)
                                }
                            >
                                <Box p={3}>
                                    <Text.Title size="small">
                                        {category.en}
                                    </Text.Title>
                                    <Text>{category.vi}</Text>
                                </Box>
                            </List.Item>
                        ))}
                    </List>
                </Box>
            </Box>
        </PageLayout>
    );
};

export default Programs;
