import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import * as Md from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { Form, Formik } from 'formik'
import { validationSchema } from './utils'
import { usePartnerhook } from './hooks/usePartner'

export const DadosParceiro = () => {
  const { PartnerData, handleSubmit, initialValues } = usePartnerhook()
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
