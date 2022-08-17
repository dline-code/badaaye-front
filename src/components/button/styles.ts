import styled from 'styled-components'

export const Button = styled.button`
  width: 16rem;
  padding: 1.5rem 0;
  border-radius: 0.5rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-size: ${({ theme }) => theme.font.sizes.midle};

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`
