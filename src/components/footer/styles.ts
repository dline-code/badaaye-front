import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`

export const BigFooter = styled.footer`
  min-width: 100%;
  padding: 6rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 0.3rem solid ${({ theme }) => theme.colors.tertiary.xxwhite};
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.tertiary.xxwhite};

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    padding: 6rem 3rem;
  }
`

export const List = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    width: 100%;
    margin-top: 3rem;
    align-items: center;

    :first-child {
      margin-top: 0;
    }
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

export const Icon = styled.a`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  font-size: 2rem;
  margin-left: 1rem;
  transition: 2s;
  border: 2px solid ${({ theme }) => theme.colors.tertiary.xxcinza};
  color: ${({ theme }) => theme.colors.primary.xblue};

  :first-child {
    margin-left: 0;
  }

  :hover {
    filter: brightness(0.7);
    cursor: pointer;
    transition: 2s;
    transform: scale(1.1, 1.1);
  }
`

export const Description = styled.p`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    text-align: center;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    text-align: center;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  list-style: none;
  line-height: 2;
  transition: 1s;
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  :first-child {
    margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }

  :hover {
    cursor: pointer;
    transform: scaleX(1.1);
    transition: 1s;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    text-align: center;
  }
`

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  @media screen and (min-width: 280px) and (max-width: 400px) {
    width: 100%;
  }

  @media screen and (min-width: 540px) and (max-width: 1024px) {
    width: 60%;
  }
`

export const InputText = styled.input`
  width: 20rem;
  height: 4rem;
  padding: 0 1rem;
  border-radius: 0.3rem 0 0rem 0.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xxcinza};

  :focus {
    background-color: var(--cui-input-focus-bg, #fff);
    border-color: var(--cui-input-focus-border-color, #5c63ef);
    box-shadow: 0 0 0 0.25rem rgb(50 31 219 / 25%);
    color: var(--cui-input-focus-color, rgba(44, 56, 74, 0.95));
    outline: 0;
  }

  ::placeholder {
    font-size: ${({ theme }) => theme.font.sizes.midle};
  }

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    width: 65%;
  }
`

export const InputButton = styled.button`
  padding: 0 2rem;
  border: none;
  transition: 2s;
  border-radius: 0 0.3rem 0.3rem 0;
  color: ${({ theme }) => theme.colors.tertiary.white};
  background: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    filter: brightness(0.7);
    transition: 2s;
  }

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    width: 35%;
  }
`

export const MinFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2.5rem 10rem;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Ancora = styled.p`
  transition: 2s;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.midle};
    color: ${theme.colors.secondary.xxblue};

    :hover {
      cursor: pointer;
      transition: 2s;
      transform: scaleX(1.1);
      color: ${theme.colors.primary.xblue};
    }

    :last-child {
      color: ${theme.colors.primary.xblue};
    }
  `}

  @media screen and (min-width: 280px) and (max-width: 1000px) {
    margin-top: 2rem;
    text-align: center;
  }
`
