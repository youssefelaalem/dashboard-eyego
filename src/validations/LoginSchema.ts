import * as Yup from "yup"

export const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid Email"),
    password: Yup.string().min(6, "Password must be at lest 6 character")
})