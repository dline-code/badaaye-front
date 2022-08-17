import React from 'react'
import * as S from './styles'
import { Description } from '../banner/styles'
import { Lista } from '../footer/styles'

const step: React.FC = () => {
  return (
    <S.Lista>
      <S.Container>
        <S.TitleHead>Entenda como a Baadaye funciona</S.TitleHead>
        <S.Description>▼ Baixar explicação completa</S.Description>
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
    </S.Lista>
  )
}

export default step
