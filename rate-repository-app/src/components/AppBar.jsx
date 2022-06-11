import { View, StyleSheet, Pressable, ScrollView, } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 90,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.navBarBackground,
    },
    appBarText: {
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.bold,
        marginLeft: 20,
        marginTop: 20,
    },

});

const AppBar = () => {
    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} >
                <Link to={"/"}>
                    <Text style={styles.appBarText}>
                        Repositories
                    </Text>
                </Link>
                <Link to={"/signin"}>
                    <Text style={styles.appBarText}>
                        Sign in
                    </Text>
                </Link>

            </ScrollView>
        </View>
    );
};

export default AppBar;