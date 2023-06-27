import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'
import { toggleData } from './toggleData'

interface ToggleTypeProps {
  checkedOne: 'parceiro' | 'estudante'
}

export function ToggleRegisterType({ checkedOne }: ToggleTypeProps) {
  const [checkedRadio, setCheckedRadio] = useState<string>(checkedOne)

  const handleChangeCheckedRadio = (name: string) => {
    setCheckedRadio(name)
  }

  return (
    <S.Container>
      {toggleData.map(item => (
        <S.Label
          key={item.type}
          htmlFor="radio"
          isActive={checkedRadio === item.type}
        >
          <Link href={item.link}>{'  '}</Link>
          <S.Image src={item.src} alt="image" />
          <S.Content>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.description}</S.Description>
          </S.Content>
          <input
            type="radio"
            id="radio"
            checked={checkedRadio === item.type}
            name="radio"
            onChange={() => handleChangeCheckedRadio(item.type)}
          />
        </S.Label>
      ))}
    </S.Container>
  )
}
