import { useFormik } from "formik";
import { IErrorInterface, IPartnerPart2 } from "../type"
import { postFetchPartner } from "../services"
import { toast } from "react-toastify"
import * as yup from "yup";
import { getCookie } from "react-use-cookie"
import Router from "next/router"

const UseValidatePartnerData = () => {

    const parceiroId = getCookie("parceiroId")

    async function partnerResistration(data: IPartnerPart2){
        try{
            const partner = await postFetchPartner(data);
            if(partner){
                toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"});

                Router.push({
                    pathname:"/tela-principal-parceiro",
                })
            } 
        } catch(err){
            const error = err as IErrorInterface
            toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
        }   
    }

    const formik = useFormik({
        initialValues:{
            areaId: "",
            descricao: "",
        },
        validationSchema: yup.object({
            areaId: yup.string().min(1, "seleccione a area de interesse").required("a area de interece é obrigatoria"),
            descricao: yup.string().max(255, "máximo de 255 caracteres").required("a descricao é obrigatoria")
        }),
        onSubmit: data => {
            Object.assign(data,{parceiroId});
            partnerResistration(data);
        },
    })
    return{
        formik,
    }
}
export {UseValidatePartnerData};