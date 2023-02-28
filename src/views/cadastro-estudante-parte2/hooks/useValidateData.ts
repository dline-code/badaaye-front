import { useFormik } from "formik"
import { toast } from "react-toastify";
import * as yup from "yup";
import { putFetchStudentPart2 } from "../services";
import { IErrorInterface, IStudent } from "../type";


const UseValidateData = () => {    
    async function StudentregistrationPart2(data: IStudent){
        try{
            const student = await putFetchStudentPart2(data)
            if(student) toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"})
            console.log(student)
        } catch(err){
            const error = err as IErrorInterface
            toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
        }   
    }

    const formik = useFormik({
        initialValues:{
          grauId: "",
          cursoId: "",
          universidadeId: "",
          provinciaId: "",
          municipioId: "",
          bairro: "",
          estudanteId: "54c8e1bf-9139-4a50-b655-f4738a5a0227",
        },
        validationSchema: yup.object({
          grauId: yup.string().min(1,"selecione o campo").required("O grau é obrigatório"),
          cursoId: yup.string().min(1,"selecione o campo").required("O curso é obrigatório"),
          universidadeId: yup.string().min(1,"selecione o campo").required("a universidade é obrigatório"),
          municipioId: yup.string().min(1,"selecione o campo").required("O municipio é obrigatório"),
          bairro: yup.string().required("O bairro é obrigatório"),
          //estudanteId: yup.string().required("o estudante é obrigatório"),
        }),
        onSubmit: data => {
       StudentregistrationPart2(data);
     },
    })
    return{
        formik,
    }
}
export {UseValidateData};