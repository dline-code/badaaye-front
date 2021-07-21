import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
import * as S from './styles'
import MenuMobile from '../menu-mobile'

const header: React.FC = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const [visible, setVisible] = useState(false)
  const [activeheader, setActiveheader] = useState(false)

  const togleHidden = () => {
    setVisible(true)
    document.body.style.overflow = 'hidden'
  }

  const togleVisible = () => {
    setVisible(false)
    document.body.style.overflow = 'visible'
  }

  useEffect(function () {
    function positionScroll() {
      if (window.scrollY > 10) {
        setActiveheader(true)
      } else {
        setActiveheader(false)
      }
    }
    window.addEventListener('scroll', positionScroll)
  }, [])

  return (
    <S.Wrapper>
      <S.Header className={activeheader ? 'active-header' : ''}>
        <S.Logo>
          <Link href="/">
            <a>
              <Image
                src="/logo-baadaye.svg"
                alt="Picture of the author"
                width={140}
                height={48}
              />
            </a>
          </Link>
        </S.Logo>

        <S.List>
          <Link href="/">
            <S.Item className={currentRoute === '/' ? 'active' : 'non-active'}>
              Financiamentos
            </S.Item>
          </Link>

          <Link href="/descontos">
            <S.Item>Descontos</S.Item>
          </Link>

          <Link href="/ajudas">
            <S.Item>Outras Ajudas</S.Item>
          </Link>

          <Link href="/parceiro">
            <S.Item>Seja Parceiro</S.Item>
          </Link>

          <Link href="/sobre">
            <S.Item>Sobre nós</S.Item>
          </Link>
        </S.List>

        <S.ContainerButton>
          <S.ButtonLogin>
            <Link href="/login">
              <a>
                <S.IconUser>
                  <AiOutlineUser />
                </S.IconUser>
                Entrar
              </a>
            </Link>
          </S.ButtonLogin>

          <S.IconMenu>
            <AiOutlineMenu size={32} onClick={togleHidden} />
          </S.IconMenu>
        </S.ContainerButton>
      </S.Header>
      {visible ? <MenuMobile onClick={togleVisible} /> : null}
    </S.Wrapper>
  )
}

export default header
