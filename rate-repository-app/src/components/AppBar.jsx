import { View, StyleSheet, Pressable, } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.navBarBackground,
        paddingBottom: 15,
    },
    appBarText: {
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.bold,
        marginLeft: 20,
        marginTop: 20,
    }

});

const AppBar = () => {
    return <View style={styles.container} >
        <Pressable>
            <Text style={styles.appBarText}>
                Repositories
            </Text>
        </Pressable>
    </View>;
};

export default AppBar;