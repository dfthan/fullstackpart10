import { Formik, } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-native';
import SignUpForm from './SignUpForm';
import { useMutation } from '@apollo/client';
import { CREATE_ACCOUNT } from '../../graphql/mutations';

const initialValues = {
    username: "",
    password: "",
    password2: "",
};

const validation = yup.object().shape({
    username: yup.string().
        min(1, "Name must be at least one character long").required("Username is required!"),
    password: yup.string()
        .min(5, "Password must be at least five characters long").required("Password is required!"),
    password2: yup.string().
        oneOf([yup.ref("password"), null], "Password does not match").required("Password confirmation required")

});

const SignUp = () => {
    const navigate = useNavigate();
    const [createAccount, { data, error }] = useMutation(CREATE_ACCOUNT);

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await createAccount({ variables: { user: { username, password } } })
            if (data) {
                console.log(data)
            }
        }
        catch {
            console.log(error);
        };
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
                {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
            </Formik>
        </>
    )
};

export default SignUp;