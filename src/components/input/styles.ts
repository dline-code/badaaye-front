import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-top:2rem;
  border:1px solid ${({ theme }) => theme.colors.tertiary.gray};
  background: ${({ theme }) => theme.colors.tertiary.white};
  display: flex;
  align-items: center;
  padding:1rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
  border-radius:.4rem;

  svg {
    font-size: ${({ theme }) => theme.font.sizes.midle};
    color: ${({ theme }) => theme.colors.secondary.xxxblue};
  }
`
export const Input = styled.input`
  margin-left: 1rem;
  flex:1;
  border:none;
  `
