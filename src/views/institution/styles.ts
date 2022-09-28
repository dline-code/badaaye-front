import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 10rem;

  .slick-slide {
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    padding: 0rem 4rem;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6rem;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    flex-direction: column;
    margin-top: 0;
  }
`

export const ContainerInstitution = styled.div`
  width: 100%;
  height: 35rem;
  margin-top: ${({ theme }) => theme.spacings.xmultipleeight};
`

export const Title = styled.h2`
  width: 30%;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    text-align: center;
    margin-top: 4rem;
  }
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    margin-top: 2rem;
    text-align: center;
  }
`
