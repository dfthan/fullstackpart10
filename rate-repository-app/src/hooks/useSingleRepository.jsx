import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useSingleRepository = ({ id }) => {
    const { loading, error, data } = useQuery(GET_SINGLE_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { repositoryId: id },
    });

    return {
        loading,
        repository: data ? data.repository : undefined
    }
};

export default useSingleRepository;