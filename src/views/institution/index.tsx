import React from 'react'
import { institution } from './mock'
import * as S from './styles'
import { InstitutionProps } from 'src/components/card-institution/type'
import Card from 'src/components/card-institution'

const viewinstitution: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef(null)
  const delay = 2500

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    window.setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === institution.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <S.Container>
      <S.Box>
        <S.Title>Estude nas melhores instituições de ensino</S.Title>
        <S.Description>
          Aproveite os financiamentos académicos e os descontos em várias
          instituições do país.
        </S.Description>
      </S.Box>
      <S.ContainerInstitutions>
        {institution.map((item: InstitutionProps) => {
          return (
            <S.ContainerCard
              style={{
                transform: `translate3d(${-index * 5}%, 0, 0)`
              }}
            >
              <Card
                image={item.image}
                title={item.title}
                previousprice={item.previousprice}
                nextprice={item.nextprice}
              />
            </S.ContainerCard>
          )
        })}
      </S.ContainerInstitutions>

      <S.SlideshowDots>
        {institution.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </S.SlideshowDots>
    </S.Container>
  )
}

export default viewinstitution
