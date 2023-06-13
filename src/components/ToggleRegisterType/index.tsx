import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

interface ToggleTypeProps {
  checkedOne: 'parceiro' | 'estudante'
}

export function ToggleRegisterType({ checkedOne }: ToggleTypeProps) {
  const [checkedRadio, setCheckedRadio] = useState(checkedOne)

  const handleChangeCheckedRadio = (name: 'parceiro' | 'estudante') => {
    setCheckedRadio(name)
  }

  return (
    <S.Container>
      <S.Label htmlFor="radio" isActive={checkedRadio === 'estudante'}>
        <Link href="/cadastro-estudante">{'  '}</Link>
        <S.Image src={'/assets/library-bolsas.svg'} alt="image" />
        <S.Content>
          <S.Title>{'Estudante'}</S.Title>
          <S.Description>
            {
              'Aluno com o ensino médio concluído frequentando ou não o ensino superior.'
            }
          </S.Description>
        </S.Content>
        <input
          type="radio"
          id="radio"
          checked={checkedRadio === 'estudante'}
          name="radio"
          onChange={() => handleChangeCheckedRadio('estudante')}
        />
      </S.Label>

      <S.Label htmlFor="radio" isActive={checkedRadio === 'parceiro'}>
        <Link href="/cadastro-estudante">{'  '}</Link>
        <S.Image src={'/assets/parceiro.svg'} alt="image" />
        <S.Container>
          <S.Title>{'Parceiro'}</S.Title>
          <S.Description>
            {
              'Entidades dispostas a contribuir para sucesso acádemico dos estudantes.'
            }
          </S.Description>
        </S.Container>
        <input
          type="radio"
          id="radio"
          checked={checkedRadio === 'parceiro'}
          name="radio"
          onChange={() => handleChangeCheckedRadio('parceiro')}
        />
      </S.Label>
    </S.Container>
  )
}
