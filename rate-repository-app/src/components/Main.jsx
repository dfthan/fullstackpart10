import Constants from 'expo-constants';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.mainBackground,
    },
});

const Main = () => {
    return (
        <>
            <AppBar />
            <View style={styles.container}>

                <RepositoryList />
            </View>
        </>
    );
};

export default Main;