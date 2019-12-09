import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    street: Yup.string()
        .min(3, "Too short")
        .max(55, "Too long")
        .required("Must enter a street name"),
    city: Yup.string()
        .min(3, "Too short")
        .max(55, "Too long")
        .required("Must enter a city name"),
});

export default validationSchema;