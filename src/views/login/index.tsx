import { useState } from 'react'
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

interface LoginProps {
  email: string
  password: string
}

const cadastroEstudante: NextPage<LoginProps> = ({ email, password }) => {
  const [userEmail, setUserEmail] = useState<string>("")
  const [userPassword, setUserPassword] = useState<string>("")

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
      .string()
      .email('Email inválido')
      .required("Este campo deve é obrigatório"),
      
      password: yup
      .string()
      .required("Este campo é obrigatório"),
    }),
    onSubmit: ()=>{
      show()
    }
  })

  function show(){
    alert(formik.values.email)
  }

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
          <div>{formik.errors.email} </div>
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
          <div>{formik.errors.password} </div>
        ): null}
        <S.ForgetPasswordLink>
          <Link href="#">
            <a>Esqueceu a sua senha?</a>
          </Link>
        </S.ForgetPasswordLink>
        <Button>Cadastrar</Button>
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

export default cadastroEstudante
