import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 8.5rem;
  .active-header {
    box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.438rem 1.813rem 0rem;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 8.5rem;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.tertiary.xxwhite};
  background: ${({ theme }) => theme.colors.tertiary.xwhite};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    padding: 0 4rem;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  .non-active {
    color: ${({ theme }) => theme.colors.secondary.xxblue};
  }

  .active {
    color: ${({ theme }) => theme.colors.secondary.xxblue};

    &:after {
      content: '';
      display: block;
      margin: 0.5rem auto;
      transform: scale(1);
      border: 0.1rem solid ${({ theme }) => theme.colors.primary.xblue};
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    display: none;
  }
`

export const Item = styled.li`
  list-style: none;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacings.xxmultipleeight};
  transform: scale(1);

  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-family: ${theme.font.family};
    border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  `}

  &:first-child {
    margin: 0;
  }

  &:before {
    content: '';
    display: block;
    transition: 1.5s;
    margin: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
    transform: scaleX(0);
    border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  }

  &:after {
    content: '';
    display: block;
    transition: 1.5s;
    margin: 0.5rem auto;
    transform: scaleX(0);
    border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  }

  &:hover {
    &:before {
      content: '';
      display: block;
      transition: 1s;
      margin: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
      transform: scaleY(1);
      border: 0.1rem solid ${({ theme }) => theme.colors.primary.xblue};
    }

    &:after {
      content: '';
      border: 1px solid ${({ theme }) => theme.colors.primary.xblue};
      display: block;
      margin: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
      transform: scaleX(1);
      transition: 1s;
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtonLogin = styled.button`
  width: 11rem;
  height: 4rem;
  border-radius: 0.3rem;
  border: none;
  transition: 1s;

  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.midle};
    color: ${theme.colors.secondary.xxblue};
    background: ${theme.colors.tertiary.xcinza};

    :hover {
      transition: 1s;
      transition: ${({ theme }) => theme.transition.slow};
      background: ${({ theme }) => theme.colors.primary.xblue};
      color: ${({ theme }) => theme.colors.tertiary.xwhite};
    }
  `}

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    display: none;
  }
`

export const IconUser = styled.span`
  margin-right: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
`

export const IconMenu = styled.span`
  display: none;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    display: block;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`

export const ContainerMenu = styled.div`
  width: 100%;
  height: 20rem;
  display: block;
`

export const ContainerUserLogged = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;

  @media screen and (max-width: 1060px){
    margin-right: 2rem;
  }
`

export const CardUserLogged = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.tertiary.gray};
`
