import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaBookOpen, FaBuilding, FaGraduationCap } from 'react-icons/fa'
import { HiArrowNarrowRight, HiLocationMarker } from 'react-icons/hi'
import Input from 'src/components/input'
import Select from 'src/components/select'
import { UseValidateData } from './hooks/useValidateData'
import { useFetchEstudantes } from './hooks/useFetschStudent'
import { useEffect } from 'react'

const CadastroEstudanteParte2: NextPage = () => {
  const { formik, isSubmitting } = UseValidateData()

  const {
    provinces,
    degree,
    course,
    university,
    municipalities,
    getDataMunicipalities
  } = useFetchEstudantes()

  useEffect(() => {
    if (formik.values.provinciaId) {
      getDataMunicipalities(formik.values.provinciaId)
    }
  }, [formik.values.provinciaId])

  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Title>Informações Academicas</S.Title>

          <S.SelectContainer>
            <Select
              title="Grau academico"
              options={degree}
              name="grauId"
              onChange={formik.handleChange}
              icon={<FaGraduationCap />}
            />
          </S.SelectContainer>
          {formik.touched.grauId && formik.errors.grauId ? (
            <S.ErrorMessage>{formik.errors.grauId}</S.ErrorMessage>
          ) : null}

          <S.SelectContainer>
            <Select
              title="O seu Curso"
              options={course}
              name="cursoId"
              onChange={formik.handleChange}
              icon={<FaBookOpen />}
            />
          </S.SelectContainer>
          {formik.touched.cursoId && formik.errors.cursoId ? (
            <S.ErrorMessage>{formik.errors.cursoId}</S.ErrorMessage>
          ) : null}

          <S.SelectContainer>
            <Select
              title="Instituição de ensino"
              name="universidadeId"
              onChange={formik.handleChange}
              options={university}
              icon={<FaBuilding />}
            />
          </S.SelectContainer>
          {formik.touched.universidadeId && formik.errors.universidadeId ? (
            <S.ErrorMessage>{formik.errors.universidadeId}</S.ErrorMessage>
          ) : null}

          <S.SelectContainer>
            <Select
              title="provincia"
              options={provinces}
              name="provinciaId"
              onChange={formik.handleChange}
              icon={<HiLocationMarker />}
            />
          </S.SelectContainer>
          {formik.touched.provinciaId && formik.errors.provinciaId ? (
            <S.ErrorMessage>{formik.errors.provinciaId}</S.ErrorMessage>
          ) : null}

          <S.SelectContainer>
            <Select
              title="Municipio"
              options={municipalities}
              name="municipioId"
              onChange={formik.handleChange}
              icon={<HiLocationMarker />}
            />
          </S.SelectContainer>
          {formik.touched.municipioId && formik.errors.municipioId ? (
            <S.ErrorMessage>{formik.errors.municipioId}</S.ErrorMessage>
          ) : null}

          <Input
            icon={<HiLocationMarker />}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.bairro}
            name="bairro"
            placeholder="Bairro"
          />
          {formik.touched.bairro && formik.errors.bairro ? (
            <S.ErrorMessage>{formik.errors.bairro}</S.ErrorMessage>
          ) : null}

          <S.Button disabled={isSubmitting} type="submit">
            Continuar <HiArrowNarrowRight />
          </S.Button>
        </S.Form>
        <S.BadayeInfo>
          <LayoutAuthentication
            title="Encontre o financiamento para os seus estudos"
            description="Conectamos você com os nossos parceiros
            que estão dispostos a financiar os seus estudos."
            link="#"
          />
        </S.BadayeInfo>
      </S.Wrapper>
    </S.Container>
  )
}
export default CadastroEstudanteParte2
