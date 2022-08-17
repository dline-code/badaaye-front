import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.xsmall};
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    margin: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};
    border: ${theme.border.solid(theme.colors.primary.blue)};
  `}
`
