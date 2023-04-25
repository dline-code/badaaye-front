import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { usePartner } from 'src/hooks/usePartner'
import { useFetch } from 'src/hooks/useFetch'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import * as Md from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { api } from 'src/services/api'
import { toast } from 'react-toastify'
import { NextApiResponse } from 'next'
import { useMutation } from 'react-query'

export const DadosParceiro = () => {
  const { options } = usePartner()
  const { data: Partner, isLoading } = useFetch('/parceiro/dados', options)
  const [PartnerData, setPartnerData] = useState(Partner)

  interface ApiResponse {
    response: {
      data: {
        message: string
      }
    }
  }

  console.log(PartnerData)

  const initialValues = {
    nome: PartnerData?.parceiro?.nome,
    descricao: PartnerData?.parceiro?.descricao,
    tipoParceiro: PartnerData?.parceiro?.tipoParceiro?.designacao,
    telefone: PartnerData?.telefone?.designacao
  }
  const validationSchema = Yup.object({
    nome: Yup.string().required('O campo nome não pode estar vázio'),
    descricao: Yup.string().required('O campo descrição não pode estar vázio'),
    tipoParceiro: Yup.string().required(
      'O campo tipo de Parceiro não pode estar vázio'
    ),
    telefone: Yup.string().required(
      'O campo numero de telefone não pode estar vázio'
    )
  })

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

  return (
    <>
      <div>
        <S.Header>
          <S.HeaderInner>
            <Link href="/">
              <a>
                <Image
                  src="/logo-baadaye.svg"
                  alt="Picture of the author"
                  width={140}
                  height={48}
                />
              </a>
            </Link>

            <div>
              <AiOutlineUser />
            </div>
          </S.HeaderInner>
        </S.Header>

        <S.Main>
          <S.Content>
            <S.ContentHeader>
              <h2>Meus dados</h2>
              <p>
                Podes visualizar e modificar os dados fornecidos <br /> durante
                o cadastro e modificar
              </p>
            </S.ContentHeader>

            <S.ContentBody>
              <div>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({ isSubmitting, handleChange }) => (
                    <>
                      <Form>
                        <FormControl
                          labelName="Nome"
                          as={'input'}
                          name="nome"
                          id="nome"
                          StarIcon={<Md.MdPerson />}
                          EndIcon={<Md.MdEdit />}
                        />
                        <FormControl
                          labelName="Numero de telefone"
                          as={'input'}
                          name="telefone"
                          id="telefone"
                          StarIcon={<Md.MdPerson />}
                          EndIcon={<Md.MdEdit />}
                        />
                        <FormControl
                          labelName="Descrição"
                          as={'input'}
                          name="descricao"
                          id="descricao"
                          StarIcon={<Md.MdDescription />}
                          EndIcon={<Md.MdEdit />}
                        />

                        <FormControl
                          labelName="Tipo de Parceiro"
                          as={'input'}
                          name="tipoParceiro"
                          id="tipoParceiro"
                          StarIcon={<HiUsers />}
                          EndIcon={<Md.MdEdit />}
                        />
                        <div>
                          <Button type="submit" disabled={isSubmitting}>
                            Modificar Dados
                          </Button>
                        </div>
                      </Form>
                    </>
                  )}
                </Formik>
              </div>
            </S.ContentBody>
          </S.Content>
        </S.Main>
      </div>
    </>
  )
}
