import { StyleSheet, View, Pressable } from "react-native"
import Text from "../Text"
import theme from "../../theme"
import FormikTextInput from "../FormikTextInput"


const styles = StyleSheet.create({
    outerFormContainer: {
        alignItems: 'center',
        backgroundColor: "white",
    },
    formContainer: {
        width: "80%",
    },
    formButton: {
        marginTop: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        width: "80%",
        height: "17%",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white"
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <>
            <View style={styles.outerFormContainer}>
                <View style={styles.formContainer}>
                    <FormikTextInput name="username" placeholder="Username" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                </View>
                <Pressable style={styles.formButton} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
            </View>
        </>
    );
};

export default SignInForm;