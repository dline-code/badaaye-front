import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 53rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .slick-slide {
    width: 100%;
    height: 30rem;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 10rem;

  @media (max-width: 1124px) {
    flex-direction: column;
    padding: 4rem 7rem;
  }
`

export const ContainerInstitution = styled.div`
  width: 90%;
  height: 35rem;
  margin-top: 2rem;
`

export const Title = styled.h2`
  width: 30%;
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
    margin-top: 2rem;
    text-align: center;
  }
`
