import styled from 'styled-components'

export const ControlContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: ${({ theme }) => theme.spacings.xxmultipleeight};

  label {
    font-weight: lighter;
  }
`

export const ControlInput = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.shades.white(0)};
  background: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.small};

  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  position: relative;

  span {
    width: 20px;
    height: 20px;
    margin: 5px;

    svg {
      width: 100%;
      height: 2rem;
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
    }

    &:last-child {
      cursor: pointer;
    }
  }

  input {
    flex: 1;
    height: 3rem;
    border: none;
  }

  &:has(input:focus) {
    border-color: ${({ theme }) => theme.colors.primary.xblue};
  }

  &:has(input:disabled) {
    border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.gray};
  }
`

export const ErrorMessage = styled.span`
  color: #c70606;
  position: relative;
  margin-left: 0.2rem;
  top: 0.3rem;
  text-transform: capitalize;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.sizes.midle};
`
