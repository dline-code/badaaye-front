import { useFormik } from "formik"
import Router from "next/router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { postFecthStudent1 } from "../services";
import { IErrorInterface, IStudent } from "../type";

interface StudentProps{
    usuario:IStudent
}

const UseStudent = () => {    
    async function studentRegistration1(data: IStudent){
        try{
            const student = await postFecthStudent1(data)  
            if(student){
                toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"});

                Router.push({
                    pathname: '/cadastro-estudante-parte2',
                    query: { estudanteId: student.usuario.id},
                })
            } 
            
        } catch(err){
            const error = err as IErrorInterface
            toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
        }   
    }
    
    const formik = useFormik({
        initialValues:{
          nome: "",
          dataNascimento: "",
          email: "",
          telefone: "",
          bi:"",
          senha: "",
          confirmarSenha: ""
        },
        validationSchema: yup.object({
          nome: yup.string().required("O nome é obrigatorio"),
          telefone: yup.string()
          .matches(/^\9[1-9]\d{7}$/, 'Por favor, digite um número de telefone válido de Angola').required("número de telefone é obrigatório"),
          dataNascimento: yup.string().required("A data de Nascimento é obrigatoria"),
          email: yup.string().email("digite um email valido").required("O email é obrigatorio"),
          bi:yup.string().matches(/^\d{9}[a-zA-Z]{2}\d{3}$/,"digite um bi válido").required(""),
          senha: yup.string().min(8, "a senha deve ter pelo menos 8 digitos").required("a senha é obrigatoria"),
          confirmarSenha: yup.string().required("A confirmação de senha é obrigatoria").oneOf([yup.ref("senha")], "As senhas não correspondem"),
        }),
        onSubmit: (data) => studentRegistration1(data)
    })
    
    return{
        formik,
    }

}


export { UseStudent }