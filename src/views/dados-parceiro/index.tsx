import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import * as Md from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validationSchema } from './utils'
import { usePartnerhook } from './hooks/usePartner'
import { useFetch } from 'src/hooks/useFetch'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useState } from 'react'
import { api } from 'src/services/api'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'

export const DadosParceiro = () => {
  const { PartnerData, handleSubmit, initialValues } = usePartnerhook()
  const { data: Areas } = useFetch('/area')
  const [isOpen, setIsOpen] = useState(false)
  const [openArea, setOpenArea] = useState(false)
  const [openAreaIndex, setOpenAreaIndex] = useState<number>(0)

  const deleteAreaMutation = useMutation(deleteArea) // Movido para o nível superior do componente

  console.log(initialValues)

  function handleOptions(index: number) {
    setIsOpen(state => !state)
    setOpenAreaIndex(index)
  }

  async function deleteArea(id: string) {
    const response = await api.delete(`/areaInteresse/${id}`)
    if (response) toast.success('Area de Interesse deletada com sucesso')
    return response
  }

  async function handleDelete(id: string) {
    const confir = confirm(
      'Tens certeza que queres eliminar esta area de interesse?'
    )
    if (confir) {
      try {
        await deleteAreaMutation.mutateAsync(id)
      } catch (error: any) {
        toast.error(error?.response?.data?.message)
      }
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
                          as="textarea"
                          id="descricao"
                          name="descricao"
                        />
                        {PartnerData?.areasInteresse?.map(
                          (valor: { id: string }, index: number) => (
                            <div key={index}>
                              <FormControl
                                labelName="Area de Interesse"
                                as={'input'}
                                LastIcon={<BsThreeDotsVertical />}
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
                          />
                        )}
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
