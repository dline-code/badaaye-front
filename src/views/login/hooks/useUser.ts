import { useFormik } from "formik"
import { History } from "history";
import { toast } from "react-toastify";
import * as yup from "yup";
import { postFetchUser } from "../services";
import { IError, IUser } from "../type";
import { getCookie, setCookie } from "cookies-next"
import { useRouter } from "next/router"

import LoginView from "../index"
import { useState } from "react";

const UseUser = () => {

    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function LoginRequest(data: IUser) {
        setIsSubmitting(true)
        try {
            const response = await postFetchUser(data)
            if (response) {
                toast("Login feito com sucesso", { autoClose: 2000, type: "success" })
                setCookie("baadaye-token", response.token)

                if (response?.tipo_usuario === "parceiro") {
                    router.push({
                        pathname: "/tela-principal-parceiro",
                    });
                } else if (response?.tipo_usuario === "estudante") {
                    router.push("/tela-principal-estudante");
                } else {
                    toast.error("Erro inesperado!")
                }
            }
        } catch (err) {
            const error = err as IError
            toast(error.response?.data?.error, { autoClose: 2000, type: "error" })
        } finally {
            setTimeout(() => {
                setIsSubmitting(false)
            }, 5000);
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Email não válido")
                .required("Campo obrigatório"),

            senha: yup
                .string()
                .required("Campo obrigatório"),
        }),
        onSubmit: (data) => { LoginRequest(data) }
    })

    return {
        formik,
        isSubmitting
    }

}


export { UseUser }