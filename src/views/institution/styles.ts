import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0rem;

  .slick-slide {
    width: 100%;
    height: 32rem;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6rem;

  @media (max-width: 1124px) {
    flex-direction: column;
    padding: 4rem 7rem;
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
