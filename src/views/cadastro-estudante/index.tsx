import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import RadioBox from 'src/components/radiobox'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Link from 'next/link'

const cadastroEstudante: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Form></S.Form>
      <S.Container>
        <LayoutAuthentication
          title="Encontre o financiamento para os seus estudos"
          description="Conectamos você com os nossos parceiros
    que estão dispostos a financiar os seus estudos."
        />
        <S.ContainerRadios>
          <RadioBox
            title="Estudante"
            description="Aluno com o ensino médio concluído frequentando ou não o ensino superior."
            src="/assets/library-bolsas.svg"
          />

          <RadioBox
            title="Parceiro"
            description="Entidades dispostas a contribuir para
            sucesso acádemico dos estudantes."
            src="/assets/parceiro.svg"
          />
        </S.ContainerRadios>

        <Link href="#">
          <S.Text>
            <HiArrowNarrowLeft />
            <S.LinkDescription>Voltar para login</S.LinkDescription>
          </S.Text>
        </Link>
      </S.Container>
    </S.Wrapper>
  )
}

export default cadastroEstudante
