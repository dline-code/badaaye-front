import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutProps } from './type'
import { HiArrowNarrowLeft } from 'react-icons/hi'

import { HiArrowSmRight } from 'react-icons/hi'

const layoutAuthentication: React.FC<LayoutProps> = ({
  title,
  description,
  link,
  childrenContainerSelect,
  childrenLink,
  RegistrationLink
}) => {
  const [option, setOption] = useState(true)

  const Option = () => {
    RegistrationLink ? setOption(false) : null
  }

  useEffect(() => {
    Option()
  }, [])

  return (
    <S.Wrapper>
      <Image
        src="/logo-baadaye.svg"
        alt="Picture of the author"
        width={115}
        height={90}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.ContainerSelect>{childrenContainerSelect}</S.ContainerSelect>
      {option ? (
        <Link href={link}>
          <S.Text>
            <HiArrowNarrowLeft />
            <S.LinkDescription>{childrenLink}</S.LinkDescription>
          </S.Text>
        </Link>
      ) : (
        <Link href={link}>
          <S.Text>
            <S.LinkDescription>{RegistrationLink}</S.LinkDescription>
            <HiArrowSmRight />
          </S.Text>
        </Link>
      )}
    </S.Wrapper>
  )
}

export default layoutAuthentication
