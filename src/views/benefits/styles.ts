import styled from 'styled-components'

export const Container = styled.div`
  width: 100%auto;
  height: 66rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;

  @media (max-width: 645px) {
    height: 140rem;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 645px) {
    flex-direction: column;
  }
`

export const Title = styled.h2`
  width: 30%;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 645px) {
    width: 100%;
  }
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 645px) {
    width: 100%;
    margin-top: 2rem;
  }
`

export const Benefits = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 645px) {
    flex-direction: column;
  }
`
