import styled from 'styled-components'

export const Container = styled.div`
  width: 100%auto;
  height: 50rem;
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 10rem 0 10rem;

  @media (max-width: 645px) {
    flex-direction: column;
    padding: 4rem 7rem 0 7rem;
  }
`

export const Title = styled.h2`
  width: 30%;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 645px) {
    width: 100%;
  }
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media (max-width: 645px) {
    width: 100%;
    margin-top: 2rem;
  }
`

export const ContainerInstitutions = styled.div`
  width: 100%auto;
  height: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: ease 1000ms;
  white-space: nowrap;
  margin-top: 6rem;
`

export const ContainerCard = styled.div`
  width: 19%;
  height: 28rem;
`

export const SlideshowDots = styled.div`
  text-align: center;

  .slideshowDot {
    display: inline-block;
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;

    cursor: pointer;
    margin: 0.938rem 0.438rem 0px;

    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`
