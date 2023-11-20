import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { Form, Formik } from 'formik'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import { inputControls } from './utils/formFrame'
import * as S from './styles'
import { UseStudentData } from './hooks/useStudentData'
import * as Md from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'

export function DadosEstudante() {
  const {
    isFetching,
    initialValues,
    validationSchema,
    optionMunicipio,
    options,
    handleChangeTheProvice,
    handleSubmit
  } = UseStudentData()

  if (isFetching) {
    return <>Loading...</>
  }

  return (
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
            <Link href="/tela-principal-estudante">
              <a>
                <BiArrowBack />
              </a>
            </Link>
            <h2>Meus dados</h2>
            <p>
              Podes visualizar e modificar os dados fornecidos <br /> durante o
              cadastro e modificar
            </p>
          </S.ContentHeader>

          <S.ContentBody>
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({ isSubmitting, handleChange, values }) => (
                <Form>
                  <div>
                    {inputControls.map(
                      ({ id, name, labelName, as, StarIcon, EndIcon }) => (
                        <FormControl
                          key={id}
                          labelName={labelName}
                          as={as}
                          name={name}
                          id={id}
                          StarIcon={<StarIcon />}
                          EndIcon={<EndIcon />}
                          required
                          blocked
                        />
                      )
                    )}

                    <FormControl
                      labelName={'Grau académico'}
                      as="select"
                      name={'grauId'}
                      options={options?.graus}
                      value={values.grauId}
                      StarIcon={<Md.MdSchool />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Curso'}
                      as="select"
                      name={'cursoId'}
                      options={options?.cursos}
                      value={values.cursoId}
                      StarIcon={<Md.MdBook />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Universidade'}
                      as="select"
                      name={'universidadeId'}
                      options={options?.universidades}
                      value={values.universidadeId}
                      StarIcon={<Md.MdDomain />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Provincia'}
                      as="select"
                      name={'provinciaId'}
                      options={options?.provincias}
                      value={values.provinciaId}
                      onChange={e => {
                        handleChange(e)
                        handleChangeTheProvice(e.target.value)
                      }}
                      StarIcon={<Md.MdPlace />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Municipio'}
                      as="select"
                      name={'municipioId'}
                      options={optionMunicipio}
                      value={values.municipioId}
                      StarIcon={<Md.MdPlace />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName="Bairro"
                      name="bairro"
                      StarIcon={<Md.MdPlace />}
                      EndIcon={<Md.MdEdit />}
                      value={values.bairro}
                      required
                      blocked
                    />
                  </div>

                  <div>
                    <Button type="submit" disabled={isSubmitting}>
                      Modificar Dados
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </S.ContentBody>
        </S.Content>
      </S.Main>
    </div>
  )
}
