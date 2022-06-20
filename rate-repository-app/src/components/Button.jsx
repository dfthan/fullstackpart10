import { StyleSheet, Pressable, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    formButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        width: "90%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white"
    },
    container: {
        marginTop: 20,
        height: "35%",
        minWidth: "80%",
        alignItems: "center",
        justifyContent: "center"
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