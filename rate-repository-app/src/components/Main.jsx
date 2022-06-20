import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './Repository/RepositoryList';
import { Route, Routes, } from 'react-router-native';
import SignIn from './SignIn/SignIn';
import SingleRepository from './Repository/SingleRepository';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
    },
});

const Main = () => {
    return (
        <>
            <View style={styles.container}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<RepositoryList />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path=":id" element={<SingleRepository />} />
                </Routes>

            </View>
        </>
    );
};

export default Main;