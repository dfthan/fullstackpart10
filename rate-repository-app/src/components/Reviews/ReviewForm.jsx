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

const ReviewForm = ({ onSubmit }) => {
    return (
        <>
            <View style={styles.outerFormContainer}>
                <View style={styles.formContainer}>
                    <FormikTextInput name="ownerName" placeholder="Repository owner name" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="repositoryName" placeholder="Repository name" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
                </View>
                <View style={styles.formContainer}>
                    <FormikTextInput name="text" placeholder="Review" />
                </View>
                <Button text="Create a review" onSubmit={onSubmit} />
            </View>
        </>
    );
};

export default ReviewForm;