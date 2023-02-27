import React, { useEffect } from 'react'
import Link from "next/link"
import { institution } from './mock'
import * as S from './styles'
import { InstitutionProps } from 'src/components/card-institution/type'
import Card from 'src/components/card-institution'
import { settings } from './configuration-slick'
import Slider from 'react-slick'
import Aos from 'aos'

const viewinstitution: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.Container id='instituition' data-aos="fade-up">
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
                <Link href={`/instituitions/${item.title}`}>
                  <a>
                    <Card
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      previousprice={item.previousprice}
                      nextprice={item.nextprice}
                    />
                  </a>
                </Link>
            )
          })}
        </Slider>
      </S.ContainerInstitution>
    </S.Container>
  )
}
                           
export default viewinstitution
