import { useFormik } from "formik"
import { History } from "history";
import { toast } from "react-toastify";
import * as yup from "yup";
import { postFetchUser } from "../services";
import { IError, IUser } from "../type";
import {getCookie, setCookie} from "react-use-cookie"

import LoginView from "../index"

const UseUser = () => {    
    async function LoginRequest(data: IUser){
        try{
            const response = await postFetchUser(data)
            if (response) {
                toast("Login feito com sucesso", { autoClose: 2000, type: "success" })
                setCookie("baadaye-token", response.token)
                window.location.href = "/tela-principal-estudante";
            }
        } catch(err){
            const error = err as IError
            toast(error.response?.data?.error, { autoClose: 2000, type: "error" })
            window.location.reload()
        }   
    }
    
    const formik = useFormik({
        initialValues:{
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
        onSubmit: (data) => LoginRequest(data)
    })
    
    return{
        formik,
    }

}


export { UseUser }