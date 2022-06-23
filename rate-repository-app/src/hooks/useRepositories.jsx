import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useDebounce } from "use-debounce";

const useRepositories = ({ variables }) => {
    const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables
    });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        loading,
        repositories: data ? data.repositories : undefined,
        fetchMore: handleFetchMore,
        ...result,
    }
};

export default useRepositories;