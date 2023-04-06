import { useFormik } from "formik"
import { IErrorInterface, IPartner } from "../type"
import { toast } from "react-toastify"

export const usePartner=()=>{

    const partnerResistration=(data:IPartner)=>{
        try{
            
        }catch(err){
            const error = err as IErrorInterface
            toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
        }   
    }

    const formik=useFormik({
        initialValues:{
            nome:"",
            email:"",
            parceiro:"",
            telefone:"",
            senha:"",
            confirmeSenha:""
        },
        onSubmit:(data)=>partnerResistration(data)
    })

    return{
        formik
    }
}