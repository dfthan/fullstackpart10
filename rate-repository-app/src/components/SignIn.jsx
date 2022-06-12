import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './TextInput';
import theme from '../theme';

const styles = StyleSheet.create({
    outerFormContainer: {
        alignItems: 'center',
        backgroundColor: "white",
    },
    formContainer: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: "grey",
        padding: 7,
        width: "80%",
        borderRadius: 5,
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
})

const onSubmit = (values) => {
    console.log(values);
};

const SignIn = () => {
    return (
        <View style={styles.outerFormContainer}>
            <View style={styles.formContainer}>
                <FormikTextInput name="username" placeholder="Username" />
            </View>
            <View style={styles.formContainer}>
                <FormikTextInput name="password" placeholder="Password" />
            </View>
            <Pressable style={styles.formButton} onPress={onSubmit}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
        </View>
    )
};

export default SignIn;