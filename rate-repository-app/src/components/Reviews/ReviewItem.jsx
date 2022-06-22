import { StyleSheet, View, } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
    },
    ratingContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 50,
        height: 50,
        alignItems: "center",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        textAlign: "center",
        alignItems: "center",
    },
    ratingText: {
        paddingTop: "25%",
        color: theme.colors.primary,
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold
    },
    dataContainer: {
        flexDirection: "row",
    },
    nameText: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.bold,
        marginBottom: 3,
    },
    dateText: {
        color: theme.colors.textSecondary,
        marginBottom: 3,
    },
    commentText: {
        flexShrink: 1
    },
    textContainer: {
        width: "90%"
    }
})


const ReviewItem = ({ review }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>{review.node.rating}</Text>
                </View>
                <View>
                    <Text style={styles.nameText}>{review.node.user.username}</Text>
                    <Text style={styles.dateText}>{review.node.createdAt.slice(0, 10)}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.commentText}>{review.node.text}</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

export default ReviewItem;