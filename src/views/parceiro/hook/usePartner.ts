import { useFormik } from "formik"
import { IErrorInterface, IPartner } from "../type"
import { toast } from "react-toastify"
import * as yup from "yup";
import { postPartner } from "../services";
import Router from "next/router";

export const usePartner=()=>{

    const partnerResistration = async (data:IPartner) => {
        try{
            const partner = await postPartner(data);

            if(partner){
                toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"});

                Router.push({
                    pathname: '/cadastro-parceiro-parte2',
                    query: { estudanteId: partner.usuario.id},
                });
            }            
        }catch(err){
            const error = err as IErrorInterface
            toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
        }   
    }

    const formik=useFormik({
        initialValues:{
            nome:"",
            email:"",
            tipoParceiroId:"",
            telefone:"",
            senha:"",
            confirmeSenha:""
        },
        validationSchema: yup.object({
            nome: yup.string().min(2,"selecione o campo").required("O nome é obrigatório"),
            email: yup.string().email("digite um email valido").required("O curso é obrigatório"),
            tipoParceiroId: yup.string().min(1,"selecione o campo").required("tipo de parceiro é obrigatório"),
            telefone: yup.string().matches(/^\9[1-9]\d{7}$/, 'Por favor, digite um número de telefone válido de Angola').required("número de telefone é obrigatório"),
          senha: yup.string().min(8, "a senha deve ter pelo menos 8 digitos").required("a senha é obrigatoria"),
          confirmeSenha: yup.string().required("A confirmação de senha é obrigatoria").oneOf([yup.ref("senha")], "As senhas não correspondem"),
          }),
        onSubmit:(data)=>partnerResistration(data)
    })

    return{
        formik
    }
}