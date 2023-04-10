import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaGraduationCap } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useFetchData } from './hooks/useFetchData'
import Select from 'src/components/select'
import { UseValidatePartnerData } from './hooks/useValidatePartnerData'

const CadastroParceiroPart2: NextPage = () => {
  const {area,isLoading}=useFetchData('/area');
  const { formik } = UseValidatePartnerData();

  if(isLoading)
    return <>Carregando...</>
  return (
    <S.Container>
      <S.Wrapper>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.Title>Informações do Parceiro</S.Title>
          <S.SelectContainer>
            <Select
              title="Àrea de interesse"
              options={area}
              name="areaId"
              icon={<FaGraduationCap />}
              onChange={formik.handleChange}
            />    
            {formik.touched.areaId && formik.errors.areaId ? (
              <S.ErrorMessage>
                {formik.errors.areaId}
              </S.ErrorMessage>
          ): null}
          </S.SelectContainer>

          <S.TextArea 
            placeholder='Fale sobre sí e seus objectivos'
            name="descricao"
            onChange={formik.handleChange}
            >
          </S.TextArea>
          {formik.touched.descricao && formik.errors.descricao ? (
              <S.ErrorMessage>
                {formik.errors.descricao}
              </S.ErrorMessage>
          ): null}
          
          <S.Button type="submit">Continuar <HiArrowNarrowRight/></S.Button>
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
export default CadastroParceiroPart2;
