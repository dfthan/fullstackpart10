import { View, StyleSheet, Linking, FlatList, Image } from "react-native";
import { useParams } from "react-router-native";
import useSingleRepository from "../../hooks/useSingleRepository";
import InfoComponent from "../Repository/InfoComponent";
import Button from "../Button";
import Text from "../Text";
import theme from "../../theme";
import useReview from "../../hooks/useReview";
import ReviewItem from "../Reviews/ReviewItem";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    headerContainer: {
        flexDirection: 'row',
    },
    headerTextContainer: {
        flex: 1,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginLeft: 5,
        marginTop: 5,
    },
    fullName: {
        paddingLeft: 6,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.bold,
    },
    description: {
        color: theme.colors.textSecondary,
        marginLeft: 6,
    },
    languageTag: {
        color: "white",
        backgroundColor: theme.colors.primary,
        borderRadius: 7,
        marginTop: 10,
        marginLeft: 5,
        paddingBottom: 4,
        paddingLeft: 5,
        paddingRight: 5,
        alignSelf: "flex-start",
    },
    separator: {
        height: 10,
    },
})

const RepositoryInfo = ({ repository }) => {
    const onSubmit = () => {
        Linking.openURL(repository.url)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.avatar}></Image>
                    <View style={styles.headerTextContainer}>
                        <Text testID="fullName" style={styles.fullName}>{repository.fullName}</Text>
                        <Text testID="description" style={styles.description}>{repository.description}</Text>
                        <Text testID="language" style={styles.languageTag}>{repository.language}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <InfoComponent infoNumber={repository.stargazersCount} infoText="Stars" />
                    <InfoComponent infoNumber={repository.forksCount} infoText="Forks" />
                    <InfoComponent infoNumber={repository.reviewCount} infoText="Reviews" />
                    <InfoComponent infoNumber={repository.ratingAverage} infoText="Rating" />
                </View>
                <Button onSubmit={onSubmit} text={"Open in GitHub"} />
            </View>
            <ItemSeparator />
        </>
    );
};

const ItemSeparator = () => <View style={styles.separator} />;


const SingleRepository = () => {
    const { id } = useParams();
    const { repository, loading } = useSingleRepository({ id });
    const { reviews } = useReview({ id });


    if (loading) return <Text>Loading</Text>
    return (
        <>
            <FlatList
                ItemSeparatorComponent={ItemSeparator}
                data={reviews}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ node: { id } }) => id}
                ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
            />
        </>
    );
};

export default SingleRepository;