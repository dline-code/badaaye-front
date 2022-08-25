import styled from 'styled-components'

export const Container = styled.section`
  min-width: 100%;
  height: 54rem;
  display: flex;
  background: ${({ theme }) => theme.colors.primary.xblue};
  flex-direction: column;
  margin-top: 20px;
  align-items: center;

  @media (max-width: 645px) {
    height: 40rem;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  position: relative;
  margin:5rem 0;
`
export const AccordionList = styled.ul`
  width: 70rem;
`
export const Item = styled.li`
  &:first-child {
    button {
      border-top: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xcinza};
    }
  }
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0;
    background: ${({ theme }) => theme.colors.primary.xblue};
    border: none;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xcinza};
    span {
      color: ${({ theme }) => theme.colors.tertiary.xwhite};
      text-align: left;
    }
    .fa-plus {
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  }

  div {
    max-height: 200px;
  }

  .open {
    background-color: none;
    max-height: 100%;
    transition: max-height 0.1s ease-out;
    background: ${({ theme }) => theme.colors.tertiary.xwhite};
    will-change: height;
  }
  .close {
    max-height: 0;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.1s ease-out;
  }
`

export const ContactIndicate = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
`


