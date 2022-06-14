import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
    });

    // returns null if backend offline
    return {
        loading,
        repositories: data ? data.repositories : null,
    }
};

export default useRepositories;