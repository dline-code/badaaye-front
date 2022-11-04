import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'

const cadastroEstudante: NextPage = () => {
  return (
    <S.Container>
      <LayoutAuthentication
        title="Seja bem vindo a nossa plataforma"
        description="Informe os seus dados para acessar a plataforma e conectar-se com parceiros ou apoiar estudantes."
        RegistrationLink="Ainda não tenho uma conta"
        link="#"
      />
      <S.Form></S.Form>
    </S.Container>
  )
}

export default cadastroEstudante
