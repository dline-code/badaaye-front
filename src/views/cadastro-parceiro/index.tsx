import type { NextPage } from 'next'
import Link from 'next/link'

import * as S from './styles'

import LayoutAuthentication from '../../components/layout-authentication'
import Input from 'src/components/input'
import Button from 'src/components/button'
import Select from 'src/components/select'
import RadioBox from 'src/components/radiobox'

import { MdEmail } from 'react-icons/md'
import { HiUser, HiArrowNarrowLeft } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
<<<<<<< HEAD:src/views/parceiro/index.tsx
import { BsBriefcaseFill, BsPhoneFill } from 'react-icons/bs'
import { usePartner } from './hook/usePartner'
import { useFetch } from 'src/hooks/useFetch'
=======
import {
  BsBriefcaseFill,
  BsFillTelephoneFill,
  BsPhoneFill
} from 'react-icons/bs'
>>>>>>> main:src/views/cadastro-parceiro/index.tsx

const Parceiro: NextPage = () => {
  const {data: partnerType, isLoading}=useFetch(`/tipoParceiro`);
  const {formik}=usePartner();

  if(isLoading)
    return <>Carregando...</>

  return (
    <S.Wrapper>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title>Crie sua conta</S.Title>
<<<<<<< HEAD:src/views/parceiro/index.tsx
        <Input
          type="text"
          placeholder="Nome da entidade"
          name='nome'
          onChange={formik.handleChange}
          icon={<HiUser />}
        />
        {formik.touched.nome && formik.errors.nome ? (
              <S.ErrorMessage>
                {formik.errors.nome}
              </S.ErrorMessage>
          ): null}

        <Input
          type="email"
          placeholder="Seu e-mail"
          name="email"
          onChange={formik.handleChange}
          icon={<MdEmail />}
        />
        {formik.touched.email && formik.errors.email ? (
              <S.ErrorMessage>
                {formik.errors.email}
              </S.ErrorMessage>
          ): null}

        <S.SelectContainer>
          <Select
            title="parceiro"
            options={partnerType}
            name="tipoParceiroId"
            onChange={formik.handleChange}
=======
        <Input type="text" placeholder="Nome da entidade" icon={<HiUser />} />
        <Input type="email" placeholder="Seu e-mail" icon={<MdEmail />} />
        <S.SelectContainer>
          <Select
            title="parceiro"
            options={[
              { nome: 'parceiro1', id: '1' },
              { nome: 'Parceiro2', id: '2' }
            ]}
>>>>>>> main:src/views/cadastro-parceiro/index.tsx
            icon={<BsBriefcaseFill />}
          />
          {formik.touched.tipoParceiroId && formik.errors.tipoParceiroId ? (
              <S.ErrorMessage>
                {formik.errors.tipoParceiroId}
              </S.ErrorMessage>
          ): null}    
        </S.SelectContainer>

        <Input
          type="number"
          placeholder="Número de telefone"
          name='telefone'
          onChange={formik.handleChange}
          icon={<BsPhoneFill />}
        />
        {formik.touched.telefone && formik.errors.telefone ? (
              <S.ErrorMessage>
                {formik.errors.telefone}
              </S.ErrorMessage>
          ): null}


        <Input
          type="password"
          placeholder="Sua senha"
<<<<<<< HEAD:src/views/parceiro/index.tsx
          name='senha'
          onChange={formik.handleChange}
=======
          icon={<RiLockPasswordFill />}
        />
        <Input
          type="password"
          placeholder="Comfirme sua senha"
>>>>>>> main:src/views/cadastro-parceiro/index.tsx
          icon={<RiLockPasswordFill />}
        />
        {formik.touched.senha && formik.errors.senha ? (
              <S.ErrorMessage>
                {formik.errors.senha}
              </S.ErrorMessage>
          ): null}

        <Input 
          type="password" 
          placeholder="Comfirme sua senha"
          name='confirmeSenha'
          onChange={formik.handleChange}
          icon={<RiLockPasswordFill />}
        />
        {formik.touched.confirmeSenha && formik.errors.confirmeSenha ? (
              <S.ErrorMessage>
                {formik.errors.confirmeSenha}
              </S.ErrorMessage>
          ): null}

        <Button>Cadastrar</Button>

        <S.Description>
          Ao se cadastrar, você aceita todos nossos{' '}
          <Link href="/">
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
          <Link href="/cadastro-estudante">
            <RadioBox
              title="Estudante"
              description="Aluno com o ensino médio concluído frequentando ou não o ensino superior."
              src="/assets/library-bolsas.svg"
              isActive={false}
            />
          </Link>
          <Link href="/cadastro-parceiro">
            <RadioBox
              title="Parceiro"
              description="Entidades dispostas a contribuir para
              sucesso acádemico dos estudantes."
              src="/assets/parceiro.svg"
              isActive={true}
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

export default Parceiro
