import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const invalidEmail = "email must be a valid email";

export const passwordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

// let schema = yup.object().shape({
//     username: yup.string().required(),
//     password: yup.string().required().length(4),
//     email: yup.string().email(),
//   });

export const validUserSchema = yup.object().shape({
  username: yup.string().required("username required"),
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required("email required"),
  password: passwordValidation,
  user_type: yup.string().required('user type required')
});

const invalidLogin = "invalid login";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, invalidLogin)
    .max(255, invalidLogin)
    .email(invalidLogin)
    .required("email required"),
  password: yup
    .string()
    .min(3, invalidLogin)
    .max(255, invalidLogin)
    .required("password required"),
});

export const changePasswordSchema = yup.object().shape({
  newPassword: passwordValidation,
});
