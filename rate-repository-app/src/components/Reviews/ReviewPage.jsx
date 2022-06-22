import { Formik } from "formik";
import { View } from "react-native";
import Text from "../Text";
import * as yup from "yup";
import ReviewForm from "./ReviewForm";

const initialValues = {
    owner: "",
    repoName: "",
    rating: "",
    review: ""
}

const validation = yup.object().shape({
    owner: yup.string().required("Repository owner name is required"),
    repoName: yup.string().required("Repository name is required"),
    rating: yup.number().min(0).max(100).required("Rating is required"),
    review: yup.string()
});

const ReviewPage = () => {
    return (
        <>
            <View>
                <Formik initialValues={initialValues} validationSchema={validation}>
                    {({ }) => <ReviewForm />}
                </Formik>

            </View>
        </>
    )
}

export default ReviewPage;