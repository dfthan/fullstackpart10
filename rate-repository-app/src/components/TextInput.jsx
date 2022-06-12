import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "grey",
        marginTop: 25,
        padding: 7,
        borderRadius: 5,
    },
    inputError: {
        borderWidth: 1,
        borderColor: theme.colors.error,
        marginTop: 25,
        padding: 7,
        borderRadius: 5,

    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        error ? styles.inputError : styles.input,

    ];

    return (
        <NativeTextInput style={textInputStyle} {...props} />
    )
};

export default TextInput;