import styled from 'styled-components'

export const Card = styled.div`
  width: 30%;
  height: 42rem;
  padding: 5rem 3rem;
  background: #f4f4f4;
  box-shadow: 0px 0.8rem 1rem rgba(93, 94, 122, 0.12);
  border-radius: 0.4rem;
  transition: 2s;

  :hover {
    transition: 2s;
    transform: scale(0.9);
    cursor: pointer;
  }

  @media (max-width: 1124px) {
    width: 100%;
    margin-top: 4rem;

    :first-child {
      margin-top: 0;
    }
  }
`

export const Title = styled.h2`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Description = styled.p`
  margin-top: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Ancora = styled.div`
  margin-top: 5rem;
  display: flex;
  transition: 2s;
  color: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    color: ${({ theme }) => theme.colors.secondary.xxblue};
  }
`
