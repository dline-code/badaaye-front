import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'
import * as S from './styles'

export function DadosEstudante() {
  return (
    <div>
      <S.Header>
        <S.HeaderInner>
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

          <div>
            <AiOutlineUser />
          </div>
        </S.HeaderInner>
      </S.Header>

      <S.Main>
        <S.Content>
          <S.ContentHeader>
            <h2>Meus dados</h2>
            <p>
              Podes visualizar e modificar os dados fornecidos <br /> durante o
              cadastro e modificar
            </p>
          </S.ContentHeader>

          <S.ContentBody>m</S.ContentBody>
        </S.Content>
      </S.Main>
    </div>
  )
}
