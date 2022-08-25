import styled from 'styled-components'

export const Footer = styled.footer`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30rem;
`

export const BigFooter = styled.footer`
  min-width: 100%;
  height: 30rem;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid ${({ theme }) => theme.colors.tertiary.xxwhite};
  border-bottom: 3px solid ${({ theme }) => theme.colors.tertiary.xxwhite};
`

export const Lista = styled.ul`
  width: 25%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const IconList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

export const Icon = styled.span`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  font-size: 2.5rem;
  margin-left: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.tertiary.xxcinza};
  color: ${({ theme }) => theme.colors.primary.xblue};

  :first-child {
    margin-left: 0;
  }

  :hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
  margin-top: 2rem;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Item = styled.li`
  list-style: none;
  line-height: 2;
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};

  :first-child {
    margin-top: 1rem;
  }

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
`

export const Input = styled.input`
  width: 20rem;
  height: 4rem;
  padding: 0 1rem;
  border-radius: 0.3rem 0 0rem 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.xxcinza};

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
`

export const Button = styled.button`
  padding: 0 2rem;
  border: none;
  border-radius: 0 0.3rem 0.3rem 0;
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  background: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    filter: brightness(0.8);
    transition: ${({ theme }) => theme.transition.slow};
  }
`

export const MinFooter = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 2.5rem 10rem;
  align-items: center;
  justify-content: space-between;
`

export const Ancora = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }

  :last-child {
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`
