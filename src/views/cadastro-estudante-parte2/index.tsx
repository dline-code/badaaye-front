import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaBookOpen, FaBuilding, FaGraduationCap} from 'react-icons/fa'
import { HiArrowNarrowRight, HiLocationMarker } from 'react-icons/hi'
import Input from 'src/components/input';
import Select from 'src/components/select'
import { UseValidateData } from './hooks/useValidateData'
import { useFetchEstudantes } from './hooks/useFetschStudent'
import { useEffect, useState } from 'react'

const CadastroEstudanteParte2: NextPage = () => {
  const { formik } = UseValidateData();

  const {
    provinces,
    degree,
    course,
    university,
    municipalities,
    getDataMunicipalities
  }=useFetchEstudantes();
  
  useEffect(()=>{
    getDataMunicipalities(formik.values.provinciaId ?? '2');
  },[formik.values.provinciaId])

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

          <S.SelectContainer>
            <Select
              title='O seu Curso'
              options={course}
              name="cursoId"
              onChange={formik.handleChange}
              icon={<FaBookOpen />}
            />
          </S.SelectContainer>

          <S.SelectContainer>
            <Select
              title="Instituição de ensino"
              name="universidadeId"
              onChange={formik.handleChange}
              options={university}
              icon={<FaBuilding />}
            />
          </S.SelectContainer>

          <S.SelectContainer>
            <Select
              title="provincia"
              options={provinces}
              name="provinciaId"
              onChange={formik.handleChange}
              icon={<HiLocationMarker />}
            />
          </S.SelectContainer>

          <S.SelectContainer>
            <Select
              title="Municipio"
              options={municipalities}
              name="municipioId"
              onChange={formik.handleChange}
              icon={<HiLocationMarker />}
            />
          </S.SelectContainer>

          <Input
            icon={<HiLocationMarker/>}
            type='text'
            onChange={formik.handleChange}
            value={formik.values.bairro}
            name="bairro"
            placeholder='Bairro'
          />
          {formik.touched.bairro && formik.errors.bairro ? (
              <S.ErrorMessage>
                {formik.errors.bairro}
              </S.ErrorMessage>
          ): null}

          <S.Button type='submit'>Continuar <HiArrowNarrowRight/></S.Button>
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
export default CadastroEstudanteParte2;
