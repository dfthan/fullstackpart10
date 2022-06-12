import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
    textInputStyle: {
        height: 100
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;