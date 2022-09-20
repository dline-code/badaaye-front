import styled from 'styled-components'

export const Banner = styled.section`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10rem;
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  background-image: url('/assets/patternMin.svg'), url('/assets/patternBig.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: right 12rem, left 0rem;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    padding: 0 4rem;
    flex-direction: column;
    background-position: right 20rem, left 2rem;
  }
`

export const ContainerItems = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const Title = styled.h1`
  width: 80%;
  font-size: 2.875rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
`

export const Summary = styled.p`
  line-height: ${({ theme }) => theme.spacings.xxmultipleeight};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
  margin-top: 1.563rem;
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.875rem;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    flex-direction: column;
    text-align: center;
  }
`
export const Paragraph = styled.div`
  @media screen and (min-width: 280px) and (max-width: 1026px) {
    order: -1;
    padding-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }
`
export const IconUsers = styled.span`
  margin-left: 3rem;
`
export const Span = styled.span`
  margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    margin-left: 0;
  }
`

export const Description = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.tertiary.xxxcinza};
  margin-top: 2.875rem;
`

export const Partners = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: row;
`
export const PartnersItems = styled.li`
  margin-left: ${({ theme }) => theme.spacings.xxxmultipleeight};

  :first-child {
    margin-left: 0;
  }
`
