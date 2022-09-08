import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 10rem;

  .slick-slide {
    height: 32rem;
  }

  @media (max-width: 500px) {
    padding: 0rem 3rem;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6rem;

  @media (max-width: 1124px) {
    width: 100%;
    flex-direction: column;
    padding: 4rem 7rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 4rem;
    padding: 0;
  }
`

export const ContainerInstitution = styled.div`
  width: 100%;
  height: 35rem;
  margin-top: 5rem;
`

export const Title = styled.h2`
  width: 30%;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 1124px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 1124px) {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
    text-align: center;
  }
`
