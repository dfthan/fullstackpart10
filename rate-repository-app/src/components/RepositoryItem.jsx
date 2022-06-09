import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
    },
    headerContainer: {
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 4,
    },
    fullName: {
        paddingLeft: 10,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.bold,
    },
    description: {
        color: theme.colors.textSecondary,
    },
    languageTag: {
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        flexGrow: 0,
    },
})

const RepositoryItem = ({ fullName, description, language, forksCount, stars, ratingAverage, reviewCount, avatar }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={{ uri: avatar }} style={styles.avatar}></Image>
                    <Text numberOfLines={2} style={styles.fullName}>{fullName}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <Text style={styles.languageTag}>Language: {language}</Text>
                <Text>Stars: {stars}</Text>
                <Text>Forks: {forksCount}</Text>
                <Text>Reviews: {reviewCount}</Text>
                <Text>Rating: {ratingAverage}</Text>
            </View>
        </>
    );
};

export default RepositoryItem;