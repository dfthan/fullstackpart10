import { StyleSheet, View, } from "react-native"
import FormikTextInput from "../FormikTextInput"
import Button from "../Button";


const styles = StyleSheet.create({
    outerFormContainer: {
        alignItems: 'center',
        backgroundColor: "white",
    },
    formContainer: {
        width: "80%",
    },
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
                <View >
                    <Button text="Sign in" onSubmit={onSubmit} />
                </View>
            </View>
        </>
    );
};

export default SignInForm;