import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from 'react-router-native';
import { GET_ME } from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: "5%",
        backgroundColor: theme.colors.navBarBackground,
    },
    appBarText: {
        color: "white",
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.bold,
        marginLeft: 20,
        marginTop: 20,
    },

});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const { data, loading } = useQuery(GET_ME);
    let userLogged = false;
    if (!loading) {
        userLogged = data.me ? true : false;
    };

    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    }

    if (userLogged) {
        return (
            <View style={styles.container} >
                <ScrollView horizontal={true} >
                    <Link to={"/"}>
                        <Text style={styles.appBarText}>
                            Repositories
                        </Text>
                    </Link>

                    <Pressable onPress={signOut} >
                        <Text style={styles.appBarText}>
                            Sign out
                        </Text>
                    </Pressable>
                </ScrollView>
            </View>
        );
    }

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