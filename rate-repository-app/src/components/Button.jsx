import { StyleSheet, Pressable, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    formButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        width: "90%",
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white"
    },
    container: {
        marginTop: 10,
        minWidth: "80%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    }

})

const Button = ({ onSubmit, text }) => {
    return (
        <>
            <View style={styles.container}>
                <Pressable style={styles.formButton} onPress={onSubmit}>
                    <Text style={styles.buttonText}>{text}</Text>
                </Pressable>
            </View>
        </>
    );

};

export default Button;