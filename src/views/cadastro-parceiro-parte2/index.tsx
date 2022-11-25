import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaGraduationCap } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Input from 'src/components/input';
import Button from 'src/components/button';

const CadastroParceiroPart2: NextPage = () => {
  return (
    <S.Wrapper>
      <>
        <S.Form>
          <S.Title>Informações do Parceiro</S.Title>
          <Input icon= {<FaGraduationCap />}placeholder='Àrea de especialidade'  type='text'></Input>
          <S.TextArea placeholder='Fale sobre sí e seus objectivos'></S.TextArea>
          <S.Button>Continuar <HiArrowNarrowRight/></S.Button>
        </S.Form>
        <S.BadayeInfo>
          <LayoutAuthentication
            title="Encontre o financiamento para os seus estudos"
            description="Conectamos você com os nossos parceiros
            que estão dispostos a financiar os seus estudos."
            link="#"
          />
        </S.BadayeInfo>
      </>
    </S.Wrapper>
  )
}
export default CadastroParceiroPart2;
