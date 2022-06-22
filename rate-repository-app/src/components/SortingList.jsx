import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';

const SortingList = ({ setFilter }) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View>
            <Provider>
                <View
                    style={{
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