import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'

const cadastroEstudante: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Form></S.Form>

      <LayoutAuthentication
        title="Encontre o financiamento para os seus estudos"
        description="Conectamos você com os nossos parceiros
    que estão dispostos a financiar os seus estudos."
        childrenLink="Voltar para login"
      />
    </S.Wrapper>
  )
}

export default cadastroEstudante
