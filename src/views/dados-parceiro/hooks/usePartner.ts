import { useState } from "react"
import { useFetch } from "src/hooks/useFetch"
import { usePartner } from "../../../../src/views/tela-principal-parceiro/hooks/usePartner"
import { toast } from "react-toastify"
import { ApiResponse, PartnerDataProps, UpdatepPartner } from "../type"
import { api } from "src/services/api"
import { useMutation } from "react-query"
import { useRouter } from "next/router"



export const usePartnerhook = ( PartnerData: PartnerDataProps ) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openArea, setOpenArea] = useState(false)
  const [openAreaIndex, setOpenAreaIndex] = useState<number>(0)

  const deleteAreaMutation = useMutation(deleteArea)
  const postAreaMutation = useMutation(postArea)
  const router = useRouter()

  function handleOptions(index: number) {
    setIsOpen(state => !state)
    setOpenAreaIndex(index)
  }

  async function deleteArea(id: string) {
    const response = await api.delete(`/areaInteresse/${id}`)
    if (response) toast.success('Area de Interesse deletada com sucesso')
    return response
  }
  async function postArea(data: { parceiroId: string, areaId: string }) {
    const response = await api.post(`/areaInteresse`, data)
    return response
  }


  async function handleDelete(id: string) {
    const confir = confirm(
      'Tens certeza que queres eliminar esta area de interesse?'
    )
    if (confir) {
      try {
        await deleteAreaMutation.mutate(id)
      } catch (error: any) {
        toast.error(error?.response?.data?.message)
      }
    }
  }


  const initialValues = {
    nome: PartnerData?.parceiro?.nome,
    descricao: PartnerData?.parceiro?.descricao,
    tipoParceiro: PartnerData?.parceiro?.tipoParceiro?.designacao,
    tipoParceiroId:   PartnerData?.parceiro?.tipoParceiroId,
    telefone: PartnerData?.telefone?.designacao,
    areasInteresse: PartnerData?.areasInteresse,
    areaId: ""
  }

const updatePartner = useMutation(
    async (data: UpdatepPartner) => {
        const typePartner = {
            designacao: data?.tipoParceiro
        }
        const contact = {
            designacao: data?.telefone
        }
        const areaInteresse = {
            parceiroId: PartnerData?.parceiro?.id,
            areaId: data?.areaId
        }

        try {
          await postAreaMutation.mutate(areaInteresse)
        } catch (error: any) {
          toast.error(error?.response?.data?.message)
        }



        const contactResult = await api.put(
            `/contacto/${PartnerData?.telefone?.id}`,
            contact
        )

        const partner = {
            nome: data?.nome,
            descricao: data?.descricao,
            tipoParceiroId: data?.tipoParceiroId
        }

        const result = await api.put(
            `/parceiro/${PartnerData?.parceiro?.id}`,
            partner
        )

        if(result){
          toast.success('Dados actualizado com sucesso')
          router.reload()
        }

        return result
    }
)

async function handleSubmit(data: UpdatepPartner) {
    try {
        const resp =  await updatePartner.mutate(data)
    } catch (e) {
        const err = e as ApiResponse
        toast.error(err?.response?.data?.message)
    }
}

    return {
        initialValues,
        handleSubmit,
        handleDelete,
        handleOptions,
        isOpen,
        openArea,
        openAreaIndex,
        setIsOpen,
        setOpenArea,
        setOpenAreaIndex,
        updatePartner
    }
}
