import { ReactNode, useEffect } from 'react'
import { setCookie} from 'react-use-cookie'
import Link from 'next/link'
import type { NextPage } from 'next'
import * as S from './styles'

import LayoutAuthentication from '../../components/layout-authentication'
import Input from 'src/components/input'
import Button from 'src/components/button'
import ErrorMassage from 'src/components/error-validation-massage'

import { MdEmail, MdPhone } from 'react-icons/md'
import { FaArrowRight, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

import { UseUser } from './hooks/useUser'

const Login: NextPage = () => {
  const { formik, isSubmitting } = UseUser()

  useEffect(() => {
    setCookie('baadaye-token', '')
  }, [])

  return (
    <S.Wrapper>
      <S.LayoutAuthContainer>
        <LayoutAuthentication
          title="Seja bem vindo a nossa plataforma"
          description="Informe os seus dados para acessar a plataforma e conectar-se com parceiros ou apoiar estudantes."
          RegistrationLink="Ainda não tenho uma conta"
        />
        <Link href="/cadastro-parceiro">
          <a>
            Ainda não tenho conta{' '}
            <i>
              <FaArrowRight />
            </i>
          </a>
        </Link>
      </S.LayoutAuthContainer>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title>Entrar na plataforma</S.Title>
        <Input
          type="text"
          id="contacto"
          name="contacto"
          placeholder="Seu Contacto"
          icon={<MdPhone />}
          onChange={formik.handleChange}
          value={formik.values.contacto}
        />
        {formik.touched.contacto && formik.errors.contacto ? (
          <ErrorMassage errorMessage={formik.errors.contacto} />
        ) : null}
        <Input
          type="password"
          id="senha"
          name="senha"
          placeholder="Sua senha"
          icon={<RiLockPasswordFill />}
          onChange={formik.handleChange}
          value={formik.values.senha}
        />
        {formik.touched.senha && formik.errors.senha ? (
          <ErrorMassage errorMessage={formik.errors.senha} />
        ) : null}
        <S.ForgetPasswordLink>
          <Link href="">
            <a>Esqueceu a sua senha?</a>
          </Link>
        </S.ForgetPasswordLink>
        <Button disabled={isSubmitting}>
          {isSubmitting ? 'Enviando' : 'Enviar'}
        </Button>
        <S.CreateAccountLink>
          <Link href="/cadastro-parceiro">
            <a>Não tenho uma conta? Criar conta</a>
          </Link>
        </S.CreateAccountLink>
        <S.SocialMediaContainer>
          <S.SocialMediaTitle>Entrar com </S.SocialMediaTitle>
          <S.SocialMediaList>
            <S.SocialMediaItem>
              <Link href="">
                <a>
                  <FaFacebook />
                </a>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="">
                <a>
                  <FaGoogle />
                </a>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="">
                <a>
                  <FaInstagram />
                </a>
              </Link>
            </S.SocialMediaItem>
          </S.SocialMediaList>
        </S.SocialMediaContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default Login
