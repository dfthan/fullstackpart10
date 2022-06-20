import SignInForm from "../SignInForm";
import { Formik } from "formik";

const SignInFormContainer = ({ onSubmit }) => {

    const initialValues = {
        username: "",
        password: ""
    };



    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} >
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </>
    );
};

export default SignInFormContainer;