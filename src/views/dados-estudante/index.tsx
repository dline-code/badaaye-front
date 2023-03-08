import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { Form, Formik } from 'formik'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import { inputControls, selectControls } from './utils/formFrame'
import * as S from './styles'
import { UseStudentData } from './hooks/useStudentData'
import { MdEdit, MdPlace } from 'react-icons/md'

export function DadosEstudante() {
  const {
    isFetching,
    optionsSelects,
    handleSubmit,
    initialValues,
    validationShema
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
            <h2>Meus dados</h2>
            <p>
              Podes visualizar e modificar os dados fornecidos <br /> durante o
              cadastro e modificar
            </p>
          </S.ContentHeader>

          <S.ContentBody>
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues!}
              validationSchema={validationShema}
            >
              {({ isSubmitting }) => (
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

                    {selectControls.map(
                      ({ id, labelName, name, StarIcon, EndIcon }) => (
                        <FormControl
                          key={id}
                          labelName={labelName}
                          as="select"
                          name={name}
                          options={optionsSelects[name]}
                          StarIcon={<StarIcon />}
                          EndIcon={<EndIcon />}
                          required
                          blocked
                        />
                      )
                    )}

                    <FormControl
                      labelName="Bairro"
                      name="bairro"
                      StarIcon={<MdPlace />}
                      EndIcon={<MdEdit />}
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
