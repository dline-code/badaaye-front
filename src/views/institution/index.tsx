import React from 'react'
import { institution } from './mock'
import * as S from './styles'
import { InstitutionProps } from 'src/components/card-institution/type'
import Card from 'src/components/card-institution'
import Slider from 'react-slick'

const viewinstitution: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1200,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 878,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }
    ]
  }
  return (
    <S.Container>
      <S.Box>
        <S.Title>Estude nas melhores instituições de ensino</S.Title>
        <S.Description>
          Aproveite os financiamentos académicos e os descontos em várias
          instituições do país.
        </S.Description>
      </S.Box>

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
    </S.Container>
  )
}

export default viewinstitution
