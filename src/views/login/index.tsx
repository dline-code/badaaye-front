import Link from 'next/link'
import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import Input from 'src/components/input'
import Button from 'src/components/button'
import { MdEmail } from 'react-icons/md'
import { FaArrowRight, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'

const cadastroEstudante: NextPage = () => {
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
      <S.Form>
        <S.Title>Entrar na plataforma</S.Title>
        <Input
          type='email'
          placeholder='Seu email'
          icon={<MdEmail/>}
        />
        <Input
          type='password'
          placeholder='Sua senha'
          icon={<MdEmail/>}
        />
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
