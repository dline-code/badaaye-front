'use client'
import type { NextPage, GetServerSideProps } from 'next'
import { api } from '../../services/api'
import { DadosParceiro } from 'src/views/dados-parceiro'
import { useFetch } from 'src/hooks/useFetch';
import { PartnerDataProps } from 'src/views/dados-parceiro/type';
import { Loading } from 'src/views/tela-principal-parceiro/styles';
import { usePartner } from 'src/views/tela-principal-parceiro/hooks/usePartner';

type PartnerProps = {
  PartnerData: PartnerDataProps
}

const PaginaDadosParceiro: NextPage<PartnerProps> = () => {
  const { options } = usePartner()
  const { data, isLoading } = useFetch(`/parceiro/dados`, options)

  if(isLoading) return <Loading/>
  return <DadosParceiro PartnerData={data} />
}

export default PaginaDadosParceiro
