import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  height: 70rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;
  transition: 2s;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    height: 160rem;
    padding: 3rem 4rem;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacings.xmultipleeight};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Title = styled.h2`
  width: 23%;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    text-align: center;
  }
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
`

export const Benefits = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xmultipleeight};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    flex-direction: column;
    align-items: space-between;
  }
`
