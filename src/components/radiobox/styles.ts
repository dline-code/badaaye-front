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
  height: 12.5rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 1rem;
  border: 0.2rem solid ${props => (props.isActive ? '#AAAAAA' : 'blue')};
`
export const Image = styled.img`
  width: 3rem;
  height: 3rem;
`

export const Container = styled.div`
  padding: 0 2rem;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.smallbold};
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
  color: #5d5e7a;
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  margin-top: 1rem;
  line-height: 2rem;
`

export const Input = styled.input``

export const Label = styled.label``
