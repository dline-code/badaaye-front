import styled from 'styled-components'

export const Card = styled.div`
  width: 35rem;
  height: 37rem;
  padding: 3.5rem 2.5rem;
  background: #f4f4f4;
  box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.438rem 1.813rem 0rem;
  border-radius: 0.3rem;
  transition: 2s;

  :hover {
    transition: 2s;
    transform: scale(0.9);
    cursor: pointer;
  }

  @media (max-width: 1270px) {
    width: 100%;
    margin-top: 4rem;

    :first-child {
      margin-top: 0;
    }
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.smallbold};
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Description = styled.p`
  margin-top: 1.4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Ancora = styled.div`
  margin-top: 5.5rem;
  display: flex;
  transition: 2s;
  color: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    color: ${({ theme }) => theme.colors.secondary.xxblue};
  }
`
