import React, {useState, useEffect, useRef} from 'react'
import * as S from './styles'
import { FrequentQuestionsProps } from './type'
import { questions } from './mock'
import { FiArrowDown, FiMinus, FiPlus } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const frequentQuestions: React.FC = () => {
  const [clicked, setCliked] = useState<number>();
  const identifier = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  let panel = identifier.current?.nextElementSibling;
  console.log(panel?.scrollHeight)

  return (
    <S.Container>
      <S.Title>Perguntas frequentes</S.Title>

      <S.AccordionList data-aos="zoom-in">
        {questions.map((value: FrequentQuestionsProps)=>(
          <S.Item key={value.id}>
            <button ref={identifier} onClick={() => clicked !== undefined && clicked === value.id ? (setCliked(undefined) ): setCliked(value.id)}><span>{value.id}. {value.question}</span>  <span className="fa-plus">{clicked === value.id ? <FiMinus /> : <FiPlus />}</span></button>
            <div className={clicked === value.id ? 'open' : 'close'} style={clicked === value.id ?{ maxHeight: panel?.scrollHeight + 'px' }: { maxHeight: 0}}>
              <p>{value.answer}</p>
            </div>
          </S.Item>
        ))}
      </S.AccordionList>
      <S.ContactIndicate>Se tiver dúvidas entre em contacto connosco <FiArrowDown/> </S.ContactIndicate>
    </S.Container>
  )
}

export default frequentQuestions
