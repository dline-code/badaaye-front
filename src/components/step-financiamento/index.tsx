import React, { useEffect } from 'react'
import * as S from './styles'
import Aos from 'aos'
import 'aos/dist/aos.css'

const step: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.List data-aos="flip-left">
      <S.Container>
        <S.Title>Entenda como a Baadaye funciona</S.Title>
        <S.Description className="download">
          ▼ Baixar explicação completa
        </S.Description>
      </S.Container>

      <S.Item>
        <S.Step>01.</S.Step>
        <S.Description>
          Inscreva-se e informe para nós os seus dados.
        </S.Description>
      </S.Item>

      <S.Item>
        <S.Step>02.</S.Step>
        <S.Description>
          Faça um vídeo sobre o motivo da sua inscrição.
        </S.Description>
      </S.Item>

      <S.Item>
        <S.Step>03.</S.Step>
        <S.Description>
          Aguarde pelo processo de avaliação do pedido.
        </S.Description>
      </S.Item>
    </S.List>
  )
}

export default step
