import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
import * as S from './styles'
import MenuMobile from '../menuMobile'

const header: React.FC = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const [visible, setVisible] = useState(false)

  const Toogle = () => {
    if (visible) {
      setVisible(!visible)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <S.Header>
        <Image
          src="/logo-baadaye.svg"
          alt="Picture of the author"
          width={170}
          height={170}
        />
        <S.Lista>
          <Link href="/">
            <S.Item className={currentRoute === '/' ? 'active' : 'non-active'}>
              Financiamentos
            </S.Item>
          </Link>

          <Link href="/home">
            <S.Item
              className={currentRoute === '/home' ? 'active' : 'non-active'}
            >
              Descontos
            </S.Item>
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
        </S.Lista>

        <S.ContainerBtn>
          <S.BtnEntrar>
            <S.IconUser>
              <AiOutlineUser />
            </S.IconUser>
            Entrar
          </S.BtnEntrar>

          <S.IconMenu onClick={() => setVisible(true)}>
            <AiOutlineMenu />
          </S.IconMenu>
        </S.ContainerBtn>
      </S.Header>
      {visible ? <MenuMobile onClick={Toogle} /> : null}
    </>
  )
}

export default header
