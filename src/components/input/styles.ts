import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.tertiary.white};
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
  position: relative;

  svg {
    color: ${({ theme }) => theme.colors.secondary.xxxblue};
  }
  span {
    width: 10%;
    height: 2rem;
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
  > span {
    cursor: pointer;
  }
`
export const Input = styled.input`
  width: 80%;
  height: 2rem;
  margin-left: 1rem;
  border: none;
`
