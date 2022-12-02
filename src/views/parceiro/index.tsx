import type { NextPage } from 'next'
import Link from 'next/link'

import { useState } from 'react'
import * as S from './styles'

import LayoutAuthentication from '../../components/layout-authentication'
import Input from 'src/components/input'
import Button from 'src/components/button'
import Select from 'src/components/select'
import RadioBox from 'src/components/radiobox'

import { MdEmail } from 'react-icons/md'
import { HiUser, HiArrowNarrowLeft } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsBriefcaseFill, BsFillTelephoneFill, BsPhoneFill } from 'react-icons/bs'

const Parceiro: NextPage = () => {
  const [color, setColor] = useState<"gray" | "blue">('blue')

  const changeColorGray = ():void => {
      setColor('gray')
  }
  const changeColorBlue = ():void => {
    setColor('blue')
  }

  return (
    <S.Wrapper>
      <S.Form>
        <S.Title>Crie sua conta</S.Title>
        <Input type="text" placeholder="Nome da entidade" icon={<HiUser/>} />
        <Input type="email" placeholder="Seu e-mail" icon={<MdEmail />} />
        <div id='select'>
          <Select
            options={["Parceiro", "Parceiro1", "Parceiro2"]}
            icon={<BsBriefcaseFill />}
          />
        </div>
        <Input
          type="tel"
          placeholder="Número de telefone"
          icon={<BsPhoneFill />}
        />
        <Input
          type="password"
          placeholder="Sua senha"
          icon={<RiLockPasswordFill />
          }
        />
        <Input type="password" 
          placeholder="Comfirme sua senha"
          icon={<RiLockPasswordFill />}
        />
        <Button>Cadastrar</Button>

        <S.Description>
          Ao se cadastrar, você aceita todos nossos <Link href="/">
            <S.Ancora>política de privacidade</S.Ancora>
          </Link>
        </S.Description>
      </S.Form>
      <S.Container>
        <LayoutAuthentication
          title="Contribua para o sucesso dos nossos estudantes"
          description="Apoie com as despesas acádemicas dos nossos estudantes para criarmos um futuro melhor."
        />
        <Link href="#">
          <S.TextBack>
            <HiArrowNarrowLeft />
            <S.LinkDescription>Voltar para login</S.LinkDescription>
          </S.TextBack>
        </Link>
        <S.ContainerRadios>
          <RadioBox
            title="Estudante"
            description="Aluno com o ensino médio concluído frequentando ou não o ensino superior."
            src="/assets/library-bolsas.svg"
            isActive={color === 'gray'}
            activeColor={'gray'}
            onClick={changeColorGray}
          />

          <RadioBox
            title="Parceiro"
            description="Entidades dispostas a contribuir para
            sucesso acádemico dos estudantes."
            src="/assets/parceiro.svg"
            isActive={color === 'blue'}
            activeColor={'blue'}
            onClick={changeColorBlue}
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

export default Parceiro
