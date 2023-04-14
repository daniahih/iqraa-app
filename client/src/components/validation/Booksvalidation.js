import * as yup from "yup";

const ReviewValidation = yup.object().shape({
  rating: yup.number().required("Selet a rating"),
  comment: yup
    .string()
    .required("Please enter a comment")
    .max(150, "Comment should be less than 150 characters"),
});

const BookValidation = yup.object().shape({
  title: yup
    .string()
    .required("Please enter a Book name")
    .max(50, "book name should be less than 50 characters"),

  Author: yup
    .string()
    .required("Please enter a Book author")
    .max(50, "BOOK name should be less than 30 characters"),
  language: yup.string().required("Please enter movie language"),
  PublicationData: yup
    .number("Number required")
    .required("Please enter PublicationData"),
  description: yup
    .string()
    .required("Please enter book description")
    .max(300, "Comment should be less than 300 characters"),
  category: yup.string().required("Please select a category"),
  emotion: yup.string().required("Please select a emotion"),
});

export { ReviewValidation, BookValidation };
