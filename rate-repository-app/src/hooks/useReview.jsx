import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReview = ({ id }) => {
    const { loading, error, data } = useQuery(GET_REVIEWS, {
        variables: { repositoryId: id },
    });

    return {
        reviews: data ? data.repository.reviews.edges : undefined
    }
}

export default useReview;