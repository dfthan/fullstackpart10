import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const { loading, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
    });

    return {
        loading,
        repositories: data ? data.repositories : undefined,
    }
};

export default useRepositories;