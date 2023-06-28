import type { NextPage, GetServerSideProps } from 'next'
import { api } from '../../services/api'
import { DadosParceiro } from 'src/views/dados-parceiro'
import { useFetch } from 'src/hooks/useFetch';

type PartnerDataProps = {
  PartnerData:{
    parceiro: {
      id: string,
      nome: string,
      email: string,
      areaId: string,
      descricao: string,
      tipoParceiroId: string,
      tipoParceiro: {
        designacao: string
      },
    },
    areasInteresse: [
      {
        id: string,
        designacao: string,
        areaId: string,
      }
    ],
    telefone: {
      id: string,
      designacao: string,
    }
  }
}



const PaginaDadosParceiro: NextPage<PartnerDataProps> = ({ PartnerData }) => {
  const { data } = useFetch(`/parceiro/dados`)
  PartnerData = data
  if (!PartnerData) return <div>Carregando...</div>
  return <DadosParceiro PartnerData={PartnerData} />
}

export default PaginaDadosParceiro

export const getServerSideProps: GetServerSideProps = async () => {
  try{
    const response = await api.get("/parceiro/dados")
    const PartnerData = response.data;
    return {
      props: {
        PartnerData,
      },
    }
  } catch (error) {
    return {
      props: {
        PartnerData: null,
      },
    }
  }
}
