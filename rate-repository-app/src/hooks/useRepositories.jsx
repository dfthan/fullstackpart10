import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (filter) => {
    const order = filter[0];
    const direction = filter[1];
    const { loading, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables: { orderBy: order, orderDirection: direction }
    });

    return {
        loading,
        repositories: data ? data.repositories : undefined,
    }
};

export default useRepositories;