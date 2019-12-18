import * as Yup from "yup";

let terms;
const validationSchema = Yup.object().shape({
    // step 1 - type of items to donate //
    // clothing: Yup.string().oneOf(terms),
    // used_clothing: Yup.string().oneOf(terms),
    // toys: Yup.string().oneOf(terms),
    // books: Yup.string().oneOf(terms),
    // other: Yup.string().oneOf(terms),
    items: Yup.boolean()
        .oneOf([true], 'Must choose at least one'),

    // clothing: Yup.boolean(),
    // used_clothing: Yup.boolean(),
    // toys: Yup.boolean(),
    // books: Yup.boolean(),
    // other: Yup.boolean(),
    // checkboxes: Yup.addMethod(
    //     Yup.boolean, 'methodChooseOne', function () {
    //         return !!(this.clothing || this.used_clothing || this.toys || this.books || this.other);
    //     }
    // .then(Yup.boolean.required('Must choose at least one'))
    // ),

    // step 3 - location //
    location: Yup
        .string
        ()
        .required("Must choose location"),
    // step 4 - pick up details //
    street: Yup
    .string()
    .min(3, "Street name is too short")
    .max(55, "Street name is too long")
    .required("Must enter a street name"),
    postcode: Yup
    .string()
    .min(3, "Postcode is too short")
    .max(8, "Postcode is too long")
    .required("Must enter a postcode"),
    phone: Yup
    .string()
    .min(9, "only 9 figures allowed")
    .required("Must enter a phone number"),
    date: Yup
    .string()
    .required("Must enter a date for pick up"),
    hour: Yup
    .string()
    .required("Must enter time for pick up"),
})
;

export default validationSchema;