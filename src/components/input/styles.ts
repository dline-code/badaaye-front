import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.tertiary.contrast};
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  font-size: ${({ theme }) => theme.font.sizes.small};
  position: relative;

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary.xblue};
    box-shadow: 0 0 0 0.25rem rgb(20 31 255 / 25%);
    color: rgba(44, 56, 74, 0.95);
    background-color: #fff;
  }

  input {
    flex: 1;
    height: 2rem;
    margin-left: 1rem;
    border: none;
    background: transparent;
  }
  span {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    position: relative;
    cursor: pointer;
    svg {
      height: 100%;
      width: 100%;
      object-fit: contain;
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
    }
  }
`
