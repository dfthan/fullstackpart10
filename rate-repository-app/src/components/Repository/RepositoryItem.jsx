import { StyleSheet, View, Image, Pressable, } from "react-native";
import { useNavigate, } from 'react-router-native';
import theme from "../../theme";
import Text from "../Text";
import InfoComponent from "./InfoComponent";
import SingleRepository from "./SingleRepository";



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
})


const RepositoryItem = ({ id, fullName, description, language, forksCount, stars, ratingAverage, reviewCount, avatar }) => {
    const navigate = useNavigate();

    return (
        <>
            <Pressable onPress={() => navigate(`/${id}`)}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Image source={{ uri: avatar }} style={styles.avatar}></Image>
                        <View style={styles.headerTextContainer}>
                            <Text testID="fullName" style={styles.fullName}>{fullName}</Text>
                            <Text testID="description" style={styles.description}>{description}</Text>
                            <Text testID="language" style={styles.languageTag}>{language}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        <InfoComponent infoNumber={stars} infoText="Stars" />
                        <InfoComponent infoNumber={forksCount} infoText="Forks" />
                        <InfoComponent infoNumber={reviewCount} infoText="Reviews" />
                        <InfoComponent infoNumber={ratingAverage} infoText="Rating" />
                    </View>
                </View>
            </Pressable>
        </>
    );
};

export default RepositoryItem;