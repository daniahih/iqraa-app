import * as yup from "yup";
// login validation
const LoginValidation = yup.object().shape({
  email: yup.string().email().required(" Email is required ").trim(),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 charcters")
    .max(20, "password must be at less than 20 charcters")
    .matches(/(?=.*[0-9])/, "password must contain a number"),
});
// registerValidation
const RegisterValidation = yup.object().shape({
  email: yup.string().email().required(" Email is required").trim(),
  password: yup
    .string()
    .required("password is required")
    .min(6, "password must be at least 6 charcters")
    .max(20, "password must be at less than 20 charcters")
    .matches(/(?=.*[0-9])/, "password must contain a number"),
  fullName: yup
    .string()
    .required("full name is required")
    .max(20, "password must be at less than 20 charcters")
    .matches(/^[a-zA-Z]*$/, "full name must contain only letters"),
});
const ProfileValidation = yup.object().shape({
  fullName: yup
    .string()
    .required("fullName is required")
    .max(20, "max 20 chars"),
  email: yup.string().email().trim().required("Email is required"),
});
export { LoginValidation, RegisterValidation, ProfileValidation };
