import styled from 'styled-components'

const colors = {
  gray: '#AAAAA',
  blue: 'blue'
}

interface RadioboxProps {
  isActive: boolean
  activeColor: 'gray' | 'blue'
}

export const RadioBox = styled.div<RadioboxProps>`
  width: 100%;
  height: 5rem;
  border: ${props => (props.isActive ? 'blue' : 'red')};
`
export const Icon = styled.span``

export const Container = styled.div``

export const Title = styled.h1``

export const Description = styled.div``

export const Input = styled.input``
