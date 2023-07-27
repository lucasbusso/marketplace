import * as yup from "yup";

export const LoginValidator = yup.object().shape({
  username: yup
    .string()
    .email()
    .trim()
    .required("Username is empty")
    .min(8, "Email is too short"),
  password: yup
    .string()
    .trim()
    .required("Password is empty")
    .min(6, "Password must be at least 6 characters"),
});
