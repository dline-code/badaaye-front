'use client'
import type { NextPage, GetServerSideProps } from 'next'
import { api } from '../../services/api'
import { DadosParceiro } from 'src/views/dados-parceiro'
import { useFetch } from 'src/hooks/useFetch';
import { PartnerDataProps } from 'src/views/dados-parceiro/type';

type PartnerProps = {
  PartnerData: PartnerDataProps
}

const PaginaDadosParceiro: NextPage<PartnerProps> = () => {
  const { data } = useFetch(`/parceiro/dados`)
  if (!data) return <div>Carregando...</div>
  return <DadosParceiro PartnerData={data} />
}

export default PaginaDadosParceiro
