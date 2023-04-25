import { useState } from "react"
import { useFetch } from "src/hooks/useFetch"
import { usePartner } from "../../../../src/views/tela-principal-parceiro/hooks/usePartner"
import { toast } from "react-toastify"
import { ApiResponse } from "../type"
import { api } from "src/services/api"
import { useMutation } from "react-query"



export const usePartnerhook = () => {
    const { options } = usePartner()
    const { data: Partner, isLoading } = useFetch('/parceiro/dados', options)
    const [PartnerData, setPartnerData] = useState(Partner)

    const initialValues = {
        nome: PartnerData?.parceiro?.nome,
        descricao: PartnerData?.parceiro?.descricao,
        tipoParceiro: PartnerData?.parceiro?.tipoParceiro?.designacao,
        telefone: PartnerData?.telefone?.designacao
    }

    const updatePartner = useMutation(
        async (data: {
            nome: string
            descricao: string
            tipoParceiro: string
            telefone: string
        }) => {
            const typePartner = {
                designacao: data?.tipoParceiro
            }
            const contact = {
                designacao: data?.telefone
            }

            const partnerResult: { id: string } = await api.put(
                `/tipoParceiro/${PartnerData?.parceiro?.tipoParceiroId}`,
                typePartner
            )

            const contactResult = await api.put(
                `/contacto/${PartnerData?.telefone?.id}`,
                contact
            )

            const partner = {
                nome: data?.nome,
                descricao: data?.descricao,
                tipoParceiroId: partnerResult?.id
            }

            const result = await api.put(
                `/parceiro/${PartnerData?.parceiro?.id}`,
                partner
            )

            return result
        }
    )

    async function handleSubmit(data: {
        nome: string
        descricao: string
        tipoParceiro: string
        telefone: string
    }) {
        try {
            await updatePartner.mutateAsync(data)
            toast.success('Parceiro actualizado com sucesso')
        } catch (e) {
            const err = e as ApiResponse
            toast.error(err?.response?.data?.message)
        }
    }

    return {
        initialValues,
        PartnerData,
        handleSubmit
    }
}