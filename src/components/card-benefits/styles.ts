import styled from 'styled-components'

export const Card = styled.div`
  width: 34rem;
  height: 37rem;
  padding: 2rem 2.5rem 3rem 2.5rem;
  background: #f4f4f4;
  box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.438rem 1.813rem 0rem;
  border-radius: 0.3rem;
  transition: 2s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  :hover {
    transition: 2s;
    transform: scale(0.9);
    cursor: pointer;
  }

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    margin-top: 3rem;

    :first-child {
      margin-top: 0;
    }
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.smallbold};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Description = styled.p`
  margin-top: 1.4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    margin-top: 3rem;

    :first-child {
      margin-top: 0;
    }
  }
`

export const Ancora = styled.div`
  display: flex;
  transition: 2s;
  color: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    color: ${({ theme }) => theme.colors.secondary.xxblue};
  }
`
