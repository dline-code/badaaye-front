import { useFormik } from "formik"
import { History } from "history";
import { toast } from "react-toastify";
import * as yup from "yup";
import { postFetchUser } from "../services";
import { IError, IUser } from "../type";
import {getCookie, setCookie} from "react-use-cookie"


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
                .min(8, "A palavra-passe deve conter pelo menos 8 caracteres")
                .required("Campo obrigatório"),
        }),
        onSubmit: (data) => LoginRequest(data)
    })
    
    return{
        formik,
    }

}


export { UseUser }