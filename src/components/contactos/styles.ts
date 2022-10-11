import styled from 'styled-components'

export const ContainerContactos = styled.section`
  width: 100%;
  background-color: #e5e5e5 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`

export const ContainerObject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110rem;
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  @media screen and (max-width: 67rem) {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    width: 25.9rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 67rem) {
      width: 40rem;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`
export const ContainerCampo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  margin-top: 2.5rem;
  input {
    border: none;
    background: ${({ theme }) => theme.colors.tertiary.contrast};
    padding: 0.7rem;
    width: 40rem;
    height: 4.3rem;
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

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  span {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  .sms {
    height: 12rem;
  }
`

export const Button = styled.button`
  border: none;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.tertiary.white};
  background: ${({ theme }) => theme.colors.primary.xblue};
  width: 40rem;
  height: 4.5rem;
  border-radius: 0.25rem;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`

export const Container1 = styled.div`
  @media screen and (max-width: 67rem) {
    margin-top: 5rem;
  }
`

export const Container2 = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary.contrast} 0% 0%
    no-repeat padding-box;
  font-size: 1.5rem;

  div {
    display: flex;
    align-items: center;

    @media screen and (max-width: 67rem) {
      justify-content: center;
    }
  }

  .icon {
    font-size: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }

  span {
    font-size: 1.5rem;
    margin-left: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  i {
    font-size: 1.5rem;
  }
  div {
    margin: 2rem 0;
  }
`
