import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Provider, TextInput } from 'react-native-paper';


const styles = StyleSheet.create({
    sortingContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    inputContainer: {
        width: "80%",
    }
});

const Searchbar = ({ searchText, setSearchText }) => {
    const onChangeText = (e) => {
        setSearchText(e);
    };

    return (
        <>
            <TextInput style={styles.inputContainer} value={searchText} onChangeText={onChangeText} placeholder='Search by name' />
        </>
    );
}

const SortingList = ({ setFilter, searchText, setSearchText }) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View style={styles.sortingContainer}>
            <Searchbar setSearchText={setSearchText} searchText={searchText} />
            <Provider>
                <View
                    style={{
                        width: "100%",
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu}>Filters</Button>}>
                        <Menu.Item onPress={() => { setFilter(["CREATED_AT", "DESC"]) }} title="Latest repositories" />
                        <Menu.Item onPress={() => { setFilter(["RATING_AVERAGE", "DESC"]) }} title="Highest rated repositories" />
                        <Menu.Item onPress={() => { setFilter(["RATING_AVERAGE", "ASC"]) }} title="Lowest rated repositories" />
                    </Menu>
                </View>
            </Provider>
        </View>
    );
};


export default SortingList;