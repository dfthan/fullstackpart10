import { StyleSheet, View, Text } from "react-native";
import theme from "../../theme";

export const formatNumber = (value) => {
    if (value > 1000) {
        return `${(value / 1000).toFixed(1)}k`
    }
    return value
}

const styles = StyleSheet.create({
    infoNumber: {
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.bold,
    },
    infoText: {
        color: theme.colors.textSecondary,

    },
    infoInsideContainer: {
        alignItems: "center",
    },
})

const InfoComponent = ({ infoNumber, infoText }) => {
    return (
        <View style={styles.infoInsideContainer}>
            <Text testID={infoText} style={styles.infoNumber}>
                {formatNumber(infoNumber)}
            </Text>
            <Text style={styles.infoText}>
                {infoText}
            </Text>

        </View>
    )
}

export default InfoComponent;