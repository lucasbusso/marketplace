import * as yup from "yup";

export const LoginValidator = yup.object().shape({
  username: yup.string().trim().required("Username is empty"),
  password: yup.string().trim().required("Password is empty"),
});
