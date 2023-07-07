import { HiDotsHorizontal } from 'react-icons/hi'
import * as S from '../styles'
import { useState } from 'react'
import { PopOverProps } from '../types'
import Link from 'next/link'

export default function PopOver({ files }: PopOverProps) {
  const [togglePopOver, setTogglePopOver] = useState(false)
  return (
    <div>
      <HiDotsHorizontal
        cursor={'pointer'}
        onClick={() => setTogglePopOver(!togglePopOver)}
      />
      <S.PopOver
        style={{
          display: `${togglePopOver ? 'flex' : 'none'}`
        }}
      >
        <Link href={`/estudate-info-resumo`}>Ver Mais</Link>
        {files.map(file => (
          <a key={file.id} target="_blank" href={file.link}>
            {file.nome}
          </a>
        ))}
      </S.PopOver>
    </div>
  )
}
