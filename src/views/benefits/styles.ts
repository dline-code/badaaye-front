import styled from 'styled-components'

export const Container = styled.div`
  width: 100%auto;
  height: 70rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 7rem;
  transition: 2s;

  @media (max-width: 1270px) {
    height: 162rem;
  }

  @media (max-width: 645px) {
    padding: 6rem 5rem;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;

  @media (max-width: 1270px) {
    flex-direction: column;
  }
`

export const Title = styled.h2`
  width: 25%;
  font-size: 2.875rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 1270px) {
    width: 100%;
    text-align: center;
  }
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 1270px) {
    width: 100%;
    margin-top: 2rem;
  }
`

export const Benefits = styled.div`
  margin-top: 4.125rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1270px) {
    height: 200rem;
    flex-direction: column;
    padding: 0 2rem;
  }
`
