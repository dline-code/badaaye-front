import type { NextPage } from 'next'
import Link from 'next/link'

import * as S from './styles'

import LayoutAuthentication from '../../components/layout-authentication'
import Input from 'src/components/input'
import Button from 'src/components/button'
import Select from 'src/components/select'

import { MdEmail } from 'react-icons/md'
import { HiUser, HiArrowNarrowLeft } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsBriefcaseFill, BsPhoneFill } from 'react-icons/bs'
import { usePartner } from './hooks/usePartner'
import { useFetch } from 'src/hooks/useFetch'
import { ToggleRegisterType } from 'src/components/ToggleRegisterType'

const Parceiro: NextPage = () => {
  const { data: partnerType, isLoading } = useFetch(`/tipoParceiro`)
  const { formik, isSubmitting } = usePartner()

  if (isLoading) return <>Carregando...</>

  return (
    <S.Wrapper>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title>Crie sua conta</S.Title>
        <Input
          type="text"
          placeholder="Nome da entidade"
          name="nome"
          onChange={formik.handleChange}
          icon={<HiUser />}
        />
        {formik.touched.nome && formik.errors.nome ? (
          <S.ErrorMessage>{formik.errors.nome}</S.ErrorMessage>
        ) : null}

        <Input
          type="email"
          placeholder="Seu e-mail"
          name="email"
          onChange={formik.handleChange}
          icon={<MdEmail />}
        />
        {formik.touched.email && formik.errors.email ? (
          <S.ErrorMessage>{formik.errors.email}</S.ErrorMessage>
        ) : null}

        <S.SelectContainer>
          <Select
            title="parceiro"
            options={partnerType}
            name="tipoParceiroId"
            onChange={formik.handleChange}
            icon={<BsBriefcaseFill />}
          />
          {formik.touched.tipoParceiroId && formik.errors.tipoParceiroId ? (
            <S.ErrorMessage>{formik.errors.tipoParceiroId}</S.ErrorMessage>
          ) : null}
        </S.SelectContainer>

        <Input
          type="number"
          placeholder="Número de telefone"
          name="telefone"
          onChange={formik.handleChange}
          icon={<BsPhoneFill />}
        />
        {formik.touched.telefone && formik.errors.telefone ? (
          <S.ErrorMessage>{formik.errors.telefone}</S.ErrorMessage>
        ) : null}

        <Input
          type="password"
          placeholder="Sua senha"
          name="senha"
          onChange={formik.handleChange}
          icon={<RiLockPasswordFill />}
        />
        {formik.touched.senha && formik.errors.senha ? (
          <S.ErrorMessage>{formik.errors.senha}</S.ErrorMessage>
        ) : null}

        <Input
          type="password"
          placeholder="Comfirme sua senha"
          name="confirmeSenha"
          onChange={formik.handleChange}
          icon={<RiLockPasswordFill />}
        />
        {formik.touched.confirmeSenha && formik.errors.confirmeSenha ? (
          <S.ErrorMessage>{formik.errors.confirmeSenha}</S.ErrorMessage>
        ) : null}

        <Button disabled={isSubmitting}>Cadastrar</Button>

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

        <ToggleRegisterType checkedOne="parceiro" />

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
