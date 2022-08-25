import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import { useRouter } from 'next/router'
import * as S from './styles'

const header: React.FC = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <S.Header>
      <Image
        src="/logo-baadaye.svg"
        alt="Picture of the author"
        width={150}
        height={150}
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
      <S.BtnEntrar>
        <S.Icon>
          <AiOutlineUser />
        </S.Icon>
        Entrar
      </S.BtnEntrar>
    </S.Header>
  )
}

export default header
