import { View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import Button from "../Button";

const styles = StyleSheet.create({
    outerFormContainer: {
        alignItems: 'center',
        backgroundColor: "white",
    },
    formContainer: {
        width: "80%",
    },
});


const ReviewForm = () => {
    return (
        <>
            <View style={styles.outerFormContainer}>
                <View style={styles.formContainer}>
                    <FormikTextInput name="owner" placeholder="Repository owner name" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="repoName" placeholder="Repository name" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="review" placeholder="Review" />
                </View>
                <View >
                    <Button text="Create a review" />
                </View>
            </View>
        </>
    );
};

export default ReviewForm;