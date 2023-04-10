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
const PasswordValidation = yup.object().shape({
  oldPassword: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
  newPassword: yup

    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
  confirmPassword: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});
export {
  LoginValidation,
  RegisterValidation,
  ProfileValidation,
  PasswordValidation,
};
