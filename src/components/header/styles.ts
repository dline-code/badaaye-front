import styled, { css } from 'styled-components'

export const Header = styled.header`
  min-width: 100%auto;
  height: 7rem;
  padding: 0 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3rem solid ${({ theme }) => theme.colors.tertiary.xxwhite};
`

export const Lista = styled.ul`
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

  @media (max-width: 1036px) {
    display: none;
  }
`

export const Item = styled.li`
  list-style: none;
  cursor: pointer;
  margin-left: 4rem;
  transform: scale(1);

  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.midle};
    border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  `}

  &:first-child {
    margin: 0;
  }

  &:before {
    content: '';
    display: block;
    transition: 1.5s;
    margin: 0.5rem auto;
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
      margin: 0.5rem auto;
      transform: scaleY(1);
      border: 0.1rem solid ${({ theme }) => theme.colors.primary.xblue};
    }

    &:after {
      content: '';
      border: 1px solid ${({ theme }) => theme.colors.primary.xblue};
      display: block;
      margin: 0.5rem auto;
      transform: scaleX(1);
      transition: 1s;
    }
  }
`

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BtnEntrar = styled.button`
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  transition: 1.5s;

  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.midle};
    color: ${theme.colors.secondary.xxblue};
    background: ${theme.colors.tertiary.xcinza};

    :hover {
      transition: 1.5s;
      transition: ${({ theme }) => theme.transition.slow};
      background: ${({ theme }) => theme.colors.primary.xblue};
      color: ${({ theme }) => theme.colors.tertiary.xwhite};
    }
  `}
`

export const IconUser = styled.span`
  margin-right: 0.5rem;
`

export const IconMenu = styled.span`
  display: none;

  @media (max-width: 1036px) {
    height: 3rem;
    font-size: 3rem;
    display: block;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.xblue};
    margin-left: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }
`

export const ContainerMenu = styled.div`
  width: 100%;
  height: 20rem;
  display: block;
`
