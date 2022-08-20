import React from 'react'
import Card from 'src/components/card-benefits'
import * as S from './styles'
import { BenefitsProps } from 'src/components/card-benefits/type'
import { benefits } from './mock'

const viewbenefits: React.FC = () => {
  return (
    <S.Container>
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
              id={item.id}
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
