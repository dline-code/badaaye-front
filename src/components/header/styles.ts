import styled from 'styled-components'

export const Header = styled.header`
  min-width: 100%auto;
  height: 7rem;
  padding: 0 7rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary.xxwhite};
`

export const Logo = styled.img`
  width: 10rem;
  height: 5rem;
`
export const Lista = styled.ul`
  display: flex;
  flex-direction: row;

  .non-active {
    color: ${({ theme }) => theme.colors.secondary.xxblue};
  }

  .active {
    color: ${({ theme }) => theme.colors.primary.xblue};
    :after {
      content: '';
      border: 1px solid ${({ theme }) => theme.colors.primary.xblue};
      display: block;
      margin: 0.5rem auto;
    }
  }
`
export const Item = styled.li`
  list-style: none;
  margin-left: 4rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.font.medium};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizes.midle};

  :first-child {
    margin: 0;
  }
`

export const BtnEntrar = styled.button`
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  border: none;
  font-weight: ${({ theme }) => theme.font.medium};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
  background: ${({ theme }) => theme.colors.tertiary.xcinza};

  :hover {
    transition: ${({ theme }) => theme.transition.slow};
    background: ${({ theme }) => theme.colors.primary.xblue};
    color: ${({ theme }) => theme.colors.tertiary.xwhite};
  }
`

export const Icon = styled.span`
  margin-right: 0.5rem;
`
