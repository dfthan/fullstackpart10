import { View, StyleSheet, Linking } from "react-native";
import { useParams } from "react-router-native";
import useSingleRepository from "../../hooks/useSingleRepository";
import Button from "../Button";
import Text from "../Text";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    container: {
        height: "22%"
    }
})


const SingleRepository = () => {
    const { id } = useParams();
    const { repository, loading } = useSingleRepository({ id });

    if (loading) return <Text>Loading</Text>

    const onSubmit = () => {
        Linking.openURL(repository.url)
    }

    return (
        <>
            <RepositoryItem
                avatar={repository.ownerAvatarUrl}
                fullName={repository.fullName}
                description={repository.description}
                language={repository.language}
                forksCount={repository.forksCount}
                stars={repository.stargazersCount}
                ratingAverage={repository.ratingAverage}
                reviewCount={repository.reviewCount}
            />
            <View style={styles.container}>
                <Button onSubmit={onSubmit} text={"Open in GitHub"} />
            </View>
        </>
    );
};

export default SingleRepository;