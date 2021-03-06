import { Formik, } from 'formik';
import SignInForm from './SignInForm';
import * as yup from "yup";
import { useSignIn } from '../../hooks/useSignIn';

const initialValues = {
    username: "",
    password: ""
};

const validation = yup.object().shape({
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!")
});

const SignIn = () => {
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const data = await signIn({ username, password });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </>
    )
};

export default SignIn;