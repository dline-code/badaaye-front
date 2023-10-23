import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    transition: ${({ theme }) => theme.transition.default};
  }

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`

export const LinkButton = styled.a`
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
    transition: ${({ theme }) => theme.transition.default};
  }

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`
