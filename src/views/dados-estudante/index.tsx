import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { Form, Formik } from 'formik'
import { FormControl } from 'src/components/FormControl'
import Button from 'src/components/button'
import { formControls } from './elementsData'
import * as S from './styles'
import { UseStudentData } from './hooks/useStudentData'

export function DadosEstudante() {
  const { handleSubmit, initialValues, validationShema } = UseStudentData()

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
              initialValues={initialValues}
              validationSchema={validationShema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div>
                    {formControls.map(
                      ({ id, name, inputTitle, StarIcon, EndIcon }) => (
                        <FormControl
                          key={id}
                          id={id}
                          name={name}
                          inputTitle={inputTitle}
                          StarIcon={<StarIcon />}
                          EndIcon={<EndIcon />}
                          required
                        />
                      )
                    )}
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
