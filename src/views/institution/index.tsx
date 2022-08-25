import React, { useEffect } from 'react'
import { institution } from './mock'
import * as S from './styles'
import { InstitutionProps } from 'src/components/card-institution/type'
import Card from 'src/components/card-institution'
import { settings } from './configuration-slick'
import Slider from 'react-slick'
import Aos from 'aos'
import 'aos/dist/aos.css'

const viewinstitution: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Container data-aos="fade-up">
      <S.Box>
        <S.Title>Estude nas melhores instituições de ensino</S.Title>
        <S.Description>
          Aproveite os financiamentos académicos e os descontos em várias
          instituições do país.
        </S.Description>
      </S.Box>

      <S.ContainerInstitution>
        <Slider {...settings}>
          {institution.map((item: InstitutionProps) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                previousprice={item.previousprice}
                nextprice={item.nextprice}
              />
            )
          })}
        </Slider>
      </S.ContainerInstitution>
    </S.Container>
  )
}

export default viewinstitution
