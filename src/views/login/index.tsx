import { useState } from 'react'
import {History} from "history"
import {setCookie, getCookie} from "react-use-cookie"
import Link from 'next/link'
import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { MdEmail } from 'react-icons/md'
import { FaArrowRight, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

import {useFormik} from "formik"
import * as yup from "yup"

import {api} from "../../services/api"

import ErrorMassage from "../../components/error-massage"

const Login: NextPage = () => {

  async function SignRequest() {
    try {
      const response = await api.post("/sessao", {
        "email": formik.values.email,
        "senha": formik.values.password,
      }).then((response) => {
        setCookie('baadaye-token', response.data.token)
        alert("Usuário logado")
        console.log('Usuário logado:', response.data.usuario)
      })
    } catch (error: any) {
      const status = await error.request.status 
      if (status === 400)
        alert("Email ou senha inválido")
    }
  }

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
      .string()
      .email('Email inválido')
      .required("Campo obrigatório"),
      
      password: yup
      .string()
      .required("Campo obrigatório"),
    }),
    onSubmit: ()=>{
      SignRequest()
    }
  })

  return (
    <S.Wrapper>
      <S.LayoutAuthContainer>
        <LayoutAuthentication
          title="Seja bem vindo a nossa plataforma"
          description="Informe os seus dados para acessar a plataforma e conectar-se com parceiros ou apoiar estudantes."
          RegistrationLink="Ainda não tenho uma conta"
          link="#"
        />
        <Link href='/parceiro'><a>Ainda não tenho conta <i><FaArrowRight/></i></a></Link>
      </S.LayoutAuthContainer>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title>Entrar na plataforma</S.Title>
        <Input
          type='email'
          id="email"
          name='email'
          placeholder='Seu email'
          icon={<MdEmail />}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorMassage 
            error={formik.errors.email}
          />
        ): null}
        <Input
          type='password'
          id="password"
          name='password'
          placeholder='Sua senha'
          icon={<RiLockPasswordFill />}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
          {formik.touched.password && formik.errors.password ? (
          <ErrorMassage 
            error={formik.errors.password}
          />
        ): null}
        <S.ForgetPasswordLink>
          <Link href="#">
            <a>Esqueceu a sua senha?</a>
          </Link>
        </S.ForgetPasswordLink>
        <Button>Entrar</Button>
        <S.CreateAccountLink>
          <Link href='parceiro'><a>Não tenho uma conta? Criar conta</a></Link>
        </S.CreateAccountLink>
        <S.SocialMediaContainer>
          <S.SocialMediaTitle>Entrar com </S.SocialMediaTitle>
          <S.SocialMediaList>
            <S.SocialMediaItem>
              <Link href="">
                <a><FaFacebook/></a>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="">
                <a><FaGoogle/></a>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="">
                <a><FaInstagram/></a>
              </Link>
            </S.SocialMediaItem>
          </S.SocialMediaList>
        </S.SocialMediaContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default Login
