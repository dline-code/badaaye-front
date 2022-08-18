import styled from 'styled-components'

export const Button = styled.button`
  width: 16rem;
  border: none;
  padding: 1.5rem 0;
  transition: 2s;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-size: ${({ theme }) => theme.font.sizes.midle};

  :hover {
    cursor: pointer;
    filter: brightness(0.7);
    transition: 1.5s;
  }
`
