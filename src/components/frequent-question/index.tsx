import React, { useState, useEffect, useRef } from 'react'
import * as S from './styles'
import { FrequentQuestionsProps } from './type'
import { questions } from './mock'
import { FiArrowDown, FiMinus, FiPlus } from 'react-icons/fi'
import Aos from 'aos'

const frequentQuestions: React.FC = () => {
  const [clicked, setCliked] = useState<number>()
  const identifier = useRef<HTMLButtonElement>(null)

  let panel = identifier.current?.nextElementSibling

  useEffect(() => {
    Aos.init({ duration: 1500 })
  })

  return (
    <S.Container>
      <S.Title>Perguntas frequentes</S.Title>

      <S.AccordionList data-aos="zoom-in">
        {questions.map((value: FrequentQuestionsProps) => (
          <S.Item key={value.id}>
            <button
              ref={identifier}
              onClick={() =>
                clicked !== undefined && clicked === value.id
                  ? setCliked(undefined)
                  : setCliked(value.id)
              }
            >
              <span>
                {value.id}. {value.question}
              </span>{' '}
              <span className="fa-plus">
                {clicked === value.id ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            <div
              className={
                clicked === value.id && clicked !== undefined ? 'open' : 'close'
              }
              style={
                clicked === value.id && clicked !== undefined
                  ? { maxHeight: panel?.scrollHeight + 'px' }
                  : { maxHeight: 0 }
              }
            >
              {Array.isArray(value.answer) ? (
                <>
                  {value.answer.map((paragraph, index) => (
                    <p className="paragraph_array" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </>
              ) : (
                <p>{value.answer}</p>
              )}
            </div>
          </S.Item>
        ))}
      </S.AccordionList>
      <S.ContactIndicate>
        Se tiver dúvidas entre em contacto connosco <FiArrowDown />{' '}
      </S.ContactIndicate>
    </S.Container>
  )
}

export default frequentQuestions
