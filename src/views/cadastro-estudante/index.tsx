import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import RadioBox from 'src/components/radiobox'
import { HiArrowNarrowLeft,HiUser } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'
import Input from 'src/components/input'
import Button from 'src/components/button'

const cadastroEstudante: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Title>Crie sua conta</S.Title>
        <Input
          type="text"
          placeholder="Seu e-mail"
          icon={<MdEmail />}
        />
        <Input
          type="text"
          placeholder="Nome completo"
          icon={<HiUser />}
        />
        <Input
          type="text"
          placeholder="Número de telefone"
          icon={<BsFillTelephoneFill />}
        />
        <Input
          type="password"
          placeholder="Sua senha"
          icon={<RiLockPasswordFill />}
        />
        <Input
          type="password"
          placeholder="Confirme senha"
          icon={<RiLockPasswordFill />}
        />

        <Button>Cadastrar</Button>

        <S.Description>
          Ao se cadastrar, você aceita nossos
          <Link href="/">
            <S.Ancora> termos de uso </S.Ancora>
          </Link>
          e a nossa{' '}
          <Link href="/">
            <S.Ancora>politica de privacidade</S.Ancora>
          </Link>
        </S.Description>
      </S.Form>
      <S.Container>
        <LayoutAuthentication
          title="Encontre o financiamento para os seus estudos"
          description="Conectamos você com os nossos parceiros
            que estão dispostos a financiar os seus estudos."
        />
        <S.ContainerRadios>
          <Link href="#">
            <RadioBox
              title="Estudante"
              description="Aluno com o ensino médio concluído frequentando ou não o ensino superior."
              src="/assets/library-bolsas.svg"
              isActive={true}
            />
          </Link>
          <Link href="/parceiro">
            <RadioBox
              title="Parceiro"
              description="Entidades dispostas a contribuir para
              sucesso acádemico dos estudantes."
              src="/assets/parceiro.svg"
              isActive={false}
            />
          </Link>
        </S.ContainerRadios>

        <Link href="/login">
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
