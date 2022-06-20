import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";

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

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            renderItem={render}
        />
    );
};
