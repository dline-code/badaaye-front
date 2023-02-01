import React, { useEffect } from 'react'
import Link from "next/link"
import Card from 'src/components/card-benefits'
import * as S from './styles'
import { BenefitsProps } from 'src/components/card-benefits/type'
import { benefits } from './mock'
import Aos from 'aos'

const viewbenefits: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Container data-aos="fade-up">
      <S.Box>
        <S.Title>Conhece os benefícios de estar conectados a nós</S.Title>
        <S.Description>
          Com auxílio dos parceiros e apoiantes, ajudamos-te a obter bolsas de
          estudos que visa reduzir as tuas despesas académicas.
        </S.Description>
      </S.Box>
      <S.Benefits>
        {benefits.map((item: BenefitsProps) => {
          return (
            <Link href={`ajudas/${item.title}`}>
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  children={item.children}
                  link={item.link}
                />
            </Link>
          )
        })}
      </S.Benefits>
    </S.Container>
  )
}

export default viewbenefits
