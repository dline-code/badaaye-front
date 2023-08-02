import { Form, Formik } from 'formik'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import { inputControls } from './utils/formFrame'
import * as S from './styles'
import { UseStudentData } from './hooks/useStudentData'
import * as Md from 'react-icons/md'
import { Layout } from 'src/components/layout'
import { PageProps } from './type'

export function DadosEstudante(props: PageProps) {
  const {
    isFetching,
    initialValues,
    validationSchema,
    optionSelects,
    optionMunicipio,
    handleChangeTheProvice,
    handleSubmit
  } = UseStudentData()

  if (isFetching) {
    return <>Loading...</>
  }

  return (
    <Layout {...Object.assign({}, props, { hideFooter: true, isLogged: true })}>
      <S.Main>
        <S.Content>
          <S.ContentHeader>
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
              {({ isSubmitting, handleChange }) => (
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
                      options={optionSelects['grauId']}
                      StarIcon={<Md.MdSchool />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Curso'}
                      as="select"
                      name={'cursoId'}
                      options={optionSelects['cursoId']}
                      StarIcon={<Md.MdBook />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Universidade'}
                      as="select"
                      name={'universidadeId'}
                      options={optionSelects['universidadeId']}
                      StarIcon={<Md.MdDomain />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName={'Provincia'}
                      as="select"
                      name={'provinciaId'}
                      options={optionSelects['provinciaId']}
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
                      StarIcon={<Md.MdPlace />}
                      EndIcon={<Md.MdEdit />}
                      blocked
                    />

                    <FormControl
                      labelName="Bairro"
                      name="bairro"
                      StarIcon={<Md.MdPlace />}
                      EndIcon={<Md.MdEdit />}
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
    </Layout>
  )
}
