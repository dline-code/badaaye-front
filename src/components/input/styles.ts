import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  margin-top:2rem;
  border:1px solid ${({ theme }) => theme.colors.tertiary.gray};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.tertiary.white};
  display: flex;
  align-items: center;
  padding:1rem;
  font-size: ${({ theme }) => theme.font.sizes.small};

  svg {
    color: ${({ theme }) => theme.colors.secondary.xxxblue};
  }
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
  flex:1;
`
