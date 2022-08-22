import styled from 'styled-components'

export const ContainerContactos = styled.section`
  height: 30rem;
  padding: 20rem;
  width: 100%;
  background-color: #e5e5e5 0% 0% no-repeat padding-box;
  display: flex;

  h1 {
    font-size: 2rem;
    width: 19.9rem;
  }
`
export const ContainerCampo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #5d5e7a;
  margin-top: 0.5rem;
  input {
    border: none;
    background: #f4f4f4;
    padding: 0.7rem;
    border: 0.109rem solid #aaaaaa;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    letter-spacing: 0;
    color: #5d5e7a;
  }

  span {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .sms {
    height: 9rem;
  }
`

export const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  color: #fff;
  background: #5c63ef;
  width: 30rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  margin-top: 2rem;
`

export const Container1 = styled.div``

export const Container2 = styled.div`
  height: 30rem;
  padding: 5rem 13rem;
  background-color: #e5e5e5 0% 0% no-repeat padding-box;

  font-size: 1.5rem;
  div {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 2rem;
  }
  span {
    margin-left: 1rem;
  }
  div {
    margin: 2rem 0;
  }
`
