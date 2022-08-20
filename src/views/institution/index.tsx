import React from 'react'
import { institution } from './mock'
import * as S from './styles'
import { InstitutionProps } from 'src/components/card-institution/type'
import Card from 'src/components/card-institution'

const viewinstitution: React.FC = () => {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef(null)
  const colors = ['#0088FE', '#00C49F', '#FFBB28']
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
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <>
      {institution.map((item: InstitutionProps) => {
        ;<div>
          <Card
            image={item.image}
            title={item.title}
            previousprice={item.previousprice}
            nextprice={item.nextprice}
          />
        </div>
      })}

      <S.SlideshowDots>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </S.SlideshowDots>
    </>
  )
}

export default viewinstitution
