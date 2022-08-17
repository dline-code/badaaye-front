import React from 'react'
import * as S from './styles'
import { ExampleComponentProps } from './types'

const ExampleComponent: React.FC<ExampleComponentProps> = ({ type }) => {
  return (
    <S.Wrapper>
      <h1>My Button</h1>
      <button type={type}>Click here</button>
    </S.Wrapper>
  )
}

export default ExampleComponent
