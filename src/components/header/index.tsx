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
        <Image
          src="/logo-baadaye.svg"
          alt="Picture of the author"
          width={170}
          height={170}
        />
        <S.List>
          <Link href="/">
            <S.Item className={currentRoute === '/' ? 'active' : 'non-active'}>
              Financiamentos
            </S.Item>
          </Link>

          <Link href="">
            <S.Item>Descontos</S.Item>
          </Link>

          <Link href="">
            <S.Item>Outras Ajudas</S.Item>
          </Link>

          <Link href="">
            <S.Item>Seja Parceiro</S.Item>
          </Link>

          <Link href="">
            <S.Item>Sobre nós</S.Item>
          </Link>
        </S.List>

        <S.ContainerButton>
          <S.ButtonLogin>
            <S.IconUser>
              <AiOutlineUser />
            </S.IconUser>
            Entrar
          </S.ButtonLogin>

          <S.IconMenu onClick={togleHidden}>
            <AiOutlineMenu />
          </S.IconMenu>
        </S.ContainerButton>
      </S.Header>
      {visible ? <MenuMobile onClick={togleVisible} /> : null}
    </S.Wrapper>
  )
}

export default header
