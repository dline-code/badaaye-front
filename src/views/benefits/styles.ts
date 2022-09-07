import styled from 'styled-components'

export const Container = styled.div`
  width: 100%auto;
  height: 70rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;
  transition: 2s;

  @media (max-width: 1270px) {
    height: 162rem;
  }

  @media (max-width: 645px) {
    padding: 6rem 5rem;
  }

  @media (max-width: 360px) {
    padding: 6rem 2rem;
    height: 150rem;
    border: 1px solid red;
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

  @media (max-width: 360px) {
    margin-top: 0rem;
  }
`

export const Title = styled.h2`
  width: 23%;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 1270px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 360px) {
    font-size: 2.2rem;
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
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1270px) {
    height: 200rem;
    flex-direction: column;
    padding: 0 2rem;
  }

  @media (max-width: 360px) {
    height: 120rem;
  }
`
