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
    const [searchText, setSearchText] = useState("");
    let variables = {
        first: 8,
        orderBy: filter[0],
        orderDirection: filter[1],
        searchKeyword: searchText
    };
    const { repositories, fetchMore } = useRepositories({
        variables
    });

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    const onEndReach = () => {
        fetchMore();
    }

    return (

        <FlatList
            ListHeaderComponent={<SortingList setFilter={setFilter} searchText={searchText} setSearchText={setSearchText} />}
            ListHeaderComponentStyle={{ elevation: 100, zIndex: 100 }}
            data={repositoryNodes}
            renderItem={render}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    );
};

export default RepositoryList;