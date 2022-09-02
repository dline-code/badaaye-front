import React, { useEffect } from 'react'
import Card from 'src/components/card-benefits'
import * as S from './styles'
import { BenefitsProps } from 'src/components/card-benefits/type'
import { benefits } from './mock'
import Aos from 'aos'
import 'aos/dist/aos.css'

const viewbenefits: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Container data-aos="fade-up">
      <S.Box>
        <S.Title>Conheça os benefícios de estudar connosco</S.Title>
        <S.Description>
          Preocupamo-nos com o futuro dos estudantes, então oferecemos soluções
          pensadas para cada realidade.
        </S.Description>
      </S.Box>
      <S.Benefits>
        {benefits.map((item: BenefitsProps) => {
          return (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              children={item.children}
              link={item.link}
            />
          )
        })}
      </S.Benefits>
    </S.Container>
  )
}

export default viewbenefits
