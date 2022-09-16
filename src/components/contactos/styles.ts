import styled from 'styled-components'

export const ContainerContactos = styled.section`
  height: 70rem;
  width: 100%;
  background-color: #e5e5e5 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`

export const ContainerObject = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110rem;

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
    background: #f4f4f4;
    padding: 0.7rem;
    width: 40rem;
    height: 4.3rem;
    border: 0.109rem solid ${({ theme }) => theme.colors.tertiary.gray};
    border-radius: 0.25rem;
    font-size: 1.5rem;
    letter-spacing: 0;
    color: #5d5e7a;
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
`

export const Container1 = styled.div`
  @media screen and (max-width: 67rem) {
    margin-top: 5rem;
  }
`

export const Container2 = styled.div`
  height: 30rem;
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
    font-size: 2rem;
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