import styled from 'styled-components'

export const Button = styled.button`
  width: 12.5rem;
  height: 3.5rem;
  border: none;
  transition: 2s;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-size: ${({ theme }) => theme.font.sizes.midle};

  :hover {
    cursor: pointer;
    filter: brightness(0.7);
    transition: 2s;
  }
`
