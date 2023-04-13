import * as yup from "yup";

const ReviewValidation = yup.object().shape({
  rating: yup.number().required("Selet a rating"),
  comment: yup
    .string()
    .required("Please enter a comment")
    .max(150, "Comment should be less than 150 characters"),
});
export { ReviewValidation };
