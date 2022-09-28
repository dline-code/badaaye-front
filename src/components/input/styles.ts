import styled from 'styled-components'

export const Container = styled.div`
  width: 20rem;
  height: 4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
  border-radius: 0.25rem;
   background:  ${({ theme }) => theme.colors.tertiary.white};
  display: flex;
  align-items: center;
  margin-left: 50px;
  padding: 2rem 1rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
  span {
    height: 2.4rem;
    width: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    position: relative;

    svg {
      height: 100%;
      width: 100%;
      object-fit: contain;
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
    }
  }
`
export const Input = styled.input`
  height: 2rem;
  width: 14rem;
  margin-left: 1rem;
  border: none;
`
