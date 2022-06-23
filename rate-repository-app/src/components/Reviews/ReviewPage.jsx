import { Formik } from "formik";
import { View } from "react-native";
import Text from "../Text";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import ReviewForm from "./ReviewForm";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";

const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: ""
}

const validation = yup.object().shape({
    ownerName: yup.string().required("Repository owner name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    rating: yup.number()
        .min(0, "Rating cannot be less than 0")
        .max(100, "Rating cannot be over 100")
        .required("Rating between 0-100 is required"),
    text: yup.string()
});

const ReviewPage = () => {
    const navigate = useNavigate();
    const [createReview, { data, error }] = useMutation(CREATE_REVIEW)
    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        try {
            await createReview({ variables: { review: { ownerName, repositoryName, rating: Number(rating), text } } });
        }
        catch {
            console.log(error);
        };
        if (data) {
            navigate(`/${data.createReview.repositoryId}`);
        };

    };
    return (
        <>
            <View>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
                    {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
                </Formik>

            </View>
        </>
    )
}

export default ReviewPage;