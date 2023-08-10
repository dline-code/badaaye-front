import styled from 'styled-components'

export const Container = styled.div`
  width: 100% auto;
  height: 23.5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 920px) {
    margin-bottom: 3.2rem;
  }
`

interface LabelProps {
  isActive: boolean
}
export const Label = styled.label<LabelProps>`
  position: relative;
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 1rem;
  border: 0.2rem solid ${props => (props.isActive ? 'blue' : '#AAAAAA')};
  border-radius: 0.4rem;

  a {
    position: absolute;
    inset: 0;
  }
`

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
`

export const Content = styled.div`
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
