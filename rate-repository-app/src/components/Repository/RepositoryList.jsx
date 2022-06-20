import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../../hooks/useRepositories';
import RepositoryItem from "./RepositoryItem"

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const render = ({ item }) => (
    <RepositoryItem
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
    const { repositories } = useRepositories();

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (

        <FlatList
            data={repositoryNodes}
            renderItem={render}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default RepositoryList;