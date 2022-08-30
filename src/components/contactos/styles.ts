import styled from 'styled-components'

export const ContainerContactos = styled.section`
  height: 30rem;
  padding: 20rem;
  width: 100%;
  background-color: #e5e5e5 0% 0% no-repeat padding-box;
  display: flex;
  @media screen and (max-width: 60rem) {
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
    width: 19.9rem;
  }
`
export const ContainerCampo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  margin-top: 0.5rem;
  input {
    border: none;
    background: ${({ theme }) => theme.colors.tertiary.contrast};
    padding: 0.7rem;
    border: 0.109rem solid ${({ theme }) => theme.colors.tertiary.gray};
    border-radius: 0.25rem;
    font-size: 1.5rem;
    letter-spacing: 0;
    color: ${({ theme }) => theme.colors.secondary.xxxblue};
    :focus {
      background-color: var(--cui-input-focus-bg, #fff);
      border-color: var(--cui-input-focus-border-color, #5c63ef);
      box-shadow: 0 0 0 0.25rem rgb(50 31 219 / 25%);
      color: var(--cui-input-focus-color, rgba(44, 56, 74, 0.95));
      outline: 0;
    }
  }

  span {
    font-size: 1.25rem;
    margin-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  .sms {
    height: 9rem;
  }
`

export const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.tertiary.white};
  background: ${({ theme }) => theme.colors.primary.xblue};
  width: 30rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  margin-top: 2rem;
`

export const Container1 = styled.div``

export const Container2 = styled.div`
  height: 30rem;
  padding: 5rem 13rem;
  background-color: ${({ theme }) => theme.colors.tertiary.contrast} 0% 0%
    no-repeat padding-box;
  font-size: 1.5rem;
  div {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }

  span {
    margin-left: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }
  div {
    margin: 2rem 0;
  }
`
