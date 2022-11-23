import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width:36rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  width: 80%;
  text-align: center;
  font-size: ${({ theme }) => theme.font.smallbold};
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  text-align: center;
  margin-top: 1rem;
  line-height: 2rem;
`

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  font-weight: ${({ theme }) => theme.font.smallbold};
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`

export const LinkDescription = styled.span`
  margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
`
