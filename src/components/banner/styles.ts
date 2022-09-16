import styled from 'styled-components'

export const Banner = styled.section`
  min-width: 100%;
  height: 56rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10rem;
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  background-image: url('/assets/patternMin.svg'), url('/assets/patternBig.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: right 12rem, left 0rem;

  @media (max-width: 1026px) and (min-width: 646px) {
    height: 85rem;
    padding: 0 10rem;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }

  @media (max-width: 645px) {
    height: 75rem;
    flex-direction: column;
    align-items: space-between;
    padding: 0 5rem;
    margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 75rem;
    padding: 0 3rem;
    background-position: right 20rem, left 2rem;
  }
`

export const ContainerItems = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1026px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    background-image: none;
    padding-top: 4rem;
  }
`

export const Title = styled.h1`
  width: 80%;
  font-size: 2.875rem;
  font-weight: ${({ theme }) => theme.font.smallbold};

  @media (max-width: 645px) {
    width: 100%;
    font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
  }

  @media (max-width: 500px) {
    width: 100%;
  }
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

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const Paragraph = styled.div`
  @media (max-width: 500px) {
    order: -1;
    padding-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }
`
export const IconUsers = styled.span`
  margin-left: 3rem;
`
export const Span = styled.span`
  margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
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
