import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReview = ({ variables }) => {
    const { loading, error, data, fetchMore, ...result } = useQuery(GET_REVIEWS, {
        variables
    });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };
    return {
        loading,
        reviews: data ? data.repository.reviews.edges : undefined,
        fetchMore: handleFetchMore,
        ...result
    }
}

export default useReview;