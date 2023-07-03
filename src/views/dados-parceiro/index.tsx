import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'
import { AiOutlineRollback, AiOutlineUser } from 'react-icons/ai'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import * as Md from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validationSchema } from './utils'
import { useFetch } from 'src/hooks/useFetch'
import { BsThreeDotsVertical } from 'react-icons/bs'
import React, { useState } from 'react'
import { ApiResponse, PartnerDataProps, UpdatepPartner } from './type'
import { useRouter } from 'next/router'
import { usePartnerhook } from './hooks/usePartner'

export const DadosParceiro:React.FC<{ PartnerData: PartnerDataProps }> = ({ PartnerData }) => {
  const { data: Areas } = useFetch('/area')
  const { data: TipoParceiro} = useFetch("/tipoParceiro")
  const router = useRouter()
  const { data: AreaInteresse } = useFetch(`/areaInteresse/${PartnerData?.parceiro?.id}`)

  const {
    handleDelete,
    handleOptions,
    handleSubmit,
    initialValues,
    isOpen,
    openAreaIndex,
    setIsOpen,
    openArea,
    setOpenArea,
    setOpenAreaIndex,
    updatePartner,
    default1,
    setDefault1
  } = usePartnerhook(PartnerData)

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
            <S.ContainerArea>
              <div>
                <AiOutlineUser />
              </div>
              <div onClick={()=> router.back()}>
                <AiOutlineRollback />
              </div>
            </S.ContainerArea>
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
                  initialValues={{
                    nome: PartnerData?.parceiro?.nome,
                    descricao: PartnerData?.parceiro?.descricao,
                    tipoParceiro: PartnerData?.parceiro?.tipoParceiro?.designacao,
                    telefone: PartnerData?.telefone?.designacao,
                    tipoParceiroId: PartnerData?.parceiro.tipoParceiroId,
                    areasInteresse: PartnerData?.areasInteresse,
                    areaId: ""
                  }}
                  validationSchema={validationSchema}
                >
                  {({ isSubmitting, handleChange }) => (
                    <>
                      <Form>
                        <FormControl
                          labelName="Nome"
                          as={'input'}
                          name="nome"
                          blocked={true}
                          id="nome"
                          StarIcon={<Md.MdPerson />}
                          EndIcon={<Md.MdEdit />}
                          onChange={(e) => {
                            handleChange(e);
                            setDefault1(false);
                          }}
                        />
                        <FormControl
                          labelName="Numero de telefone"
                          as={'input'}
                          name="telefone"
                          id="telefone"
                          blocked={true}
                          StarIcon={<Md.MdPerson />}
                          EndIcon={<Md.MdEdit />}
                          onChange={(e) => {
                            handleChange(e);
                            setDefault1(false);
                          }}
                        />
                        <FormControl
                          labelName="Descrição"
                          as="textarea"
                          style={{
                            height: "100px"
                          }}
                          id="descricao"
                          name="descricao"
                          EndIcon={<Md.MdEdit />}
                          blocked={true}
                          onChange={(e) => {
                            handleChange(e);
                            setDefault1(false);
                          }}
                        />
                        {AreaInteresse?.map(
                          (valor: { id: string }, index: number) => (
                            <div key={index}>
                              <FormControl
                                labelName="Area de Interesse"
                                as={'input'}
                                disabled={true}
                                LastIcon={<BsThreeDotsVertical />}
                                onChange={(e) => {
                                  handleChange(e);
                                  setDefault1(false);
                                }}
                                handleOptions={() => handleOptions(index)}
                                StarIcon={<Md.MdPerson />}
                                name={`areasInteresse[${index}].area.designacao`}
                                id={`areasInteresse[${index}].area.id`}
                                value={valor?.id || ''}
                              />
                              {isOpen && openAreaIndex === index && (
                                <S.MiniModal>
                                  <S.Container>
                                    {PartnerData?.areasInteresse?.length >
                                      1 && (
                                      <span
                                        onClick={() => handleDelete(valor?.id)}
                                      >
                                        Eliminar
                                      </span>
                                    )}
                                    <span onClick={() => setOpenArea(true)}>
                                      Adicionar
                                    </span>
                                  </S.Container>
                                </S.MiniModal>
                              )}
                            </div>
                          )
                        )}

                        {openArea && (
                          <FormControl
                            as={'select'}
                            name="areaId"
                            id="areaId"
                            labelName="Area de interesse"
                            options={Areas}
                            onChange={(e) => {
                              handleChange(e);
                              setDefault1(false);
                            }}
                          />
                        )}
                        <FormControl
                          labelName="Tipo de Parceiro"
                          as={'select'}
                          name="tipoParceiroId"
                          id="tipoParceiroId"
                          options={TipoParceiro}
                          blocked={true}
                          onChange={(e) => {
                            handleChange(e);
                            setDefault1(false);
                          }}
                          StarIcon={<HiUsers />}
                          EndIcon={<Md.MdEdit />}
                        />
                        <div>
                          <Button type="submit" disabled={isSubmitting || default1}>
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
