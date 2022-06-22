import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import SortingList from '../SortingList';
import RepositoryItem from "./RepositoryItem"
import { useState } from 'react';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const render = ({ item }) => (
    <RepositoryItem
        id={item.id}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        forksCount={item.forksCount}
        stars={item.stargazersCount}
        ratingAverage={item.ratingAverage}
        reviewCount={item.reviewCount}
        avatar={item.ownerAvatarUrl}
    />
)

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [filter, setFilter] = useState(["CREATED_AT", "DESC"]);
    const { repositories } = useRepositories(filter);

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (

        <FlatList
            ListHeaderComponent={<SortingList setFilter={setFilter} />}
            ListHeaderComponentStyle={{ elevation: 100, zIndex: 100 }}
            data={repositoryNodes}
            renderItem={render}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default RepositoryList;