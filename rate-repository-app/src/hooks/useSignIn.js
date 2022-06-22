import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useNavigate } from "react-router-native";
import useAuthStorage from "./useAuthStorage";


export const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { credentials: { username, password } } });
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        navigate("/");
        return data
    };

    return [signIn, result];
};


