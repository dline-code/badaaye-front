import styled from 'styled-components'

export const Banner = styled.section`
  min-width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 10rem;
`

export const ContainerItems = styled.article`
  width: 40%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 3rem;
`

export const Resume = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
`
export const Icon = styled.span`
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

export const ContainerParceiros = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  display: flex;
  flex-direction: row;
`
export const ItemParceiro = styled.li`
  margin-left: ${({ theme }) => theme.spacings.xxxmultipleeight};

  :first-child {
    margin-left: 0;
  }
`
