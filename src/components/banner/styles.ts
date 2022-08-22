import styled from 'styled-components'

export const Banner = styled.section`
  min-width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10rem;

  @media (max-width: 645px) {
    height: 90rem;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 5rem;
  }
`

export const ContainerItems = styled.article`
  width: 40%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 645px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 645px) {
    font-size: 2.5rem;
  }
`

export const Summary = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
`
export const IconUsers = styled.span`
  margin-left: 3rem;
`
export const Span = styled.span`
  margin-left: 0.5rem;
`

export const Description = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.tertiary.xxxcinza};
  margin-top: 3rem;
`

export const Partners = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  display: flex;
  flex-direction: row;
`
export const PartnersItems = styled.li`
  margin-left: ${({ theme }) => theme.spacings.xxxmultipleeight};

  :first-child {
    margin-left: 0;
  }
`
