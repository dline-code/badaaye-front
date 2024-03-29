import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100% auto;
  height: 100vh;
  padding: 0 10rem;
  background: ${({ theme }) => theme.colors.tertiary.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    padding: ${({ theme }) => theme.spacings.xmultipleeight};
  }
  @media screen and (max-width: 920px) {
    height: 100%;
    padding: ${({ theme }) => theme.spacings.xxmultipleeight} 0;
    flex-direction: column-reverse;
  }
`
export const Form = styled.form`
  width: 32%;
  height: 60rem;
  padding: ${({ theme }) => theme.spacings.xmultipleeight} 4rem;
  background: #f0f0f0;
  border-radius: 0.8rem;

  .input {
    margin-top: 1.5rem;
  }

  .button {
    margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
  }

  @media screen and (max-width: 1280px) {
    width: 35%;
  }
  @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 920px) {
    margin: 0 0 !important;
    width: 80%;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`
export const SelectContainer = styled.div`
  div {
    margin-top: 1.5rem;

    select {
      font-size: ${({ theme }) => theme.font.sizes.midle};
      width: 100%;
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
      option {
        font-size: ${({ theme }) => theme.font.sizes.midle};
      }
    }
    :has(select:focus) {
      border-color: ${({ theme }) => theme.colors.primary.xblue};
    }
  }
`
export const Description = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  text-align: center;
`

export const Ancora = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    text-decoration: underline;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.smallbold};
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
  @media screen and (max-width: 920px) {
    text-align: center;
  }
`

export const Container = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12rem;

  @media screen and (max-width: 1280px) {
    width: 36%;

    label {
      height: 12rem;
      margin-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
    }
  }
  @media screen and(max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 920px) {
    width: 80%;
    margin-left: 0 !important;
  }
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`

export const TextBack = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  font-weight: ${({ theme }) => theme.font.smallbold};
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  display: none;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
  @media screen and (max-width: 920px) {
    display: block;
  }
`
export const Text = styled(TextBack)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 920px) {
    display: none;
  }
`

export const LinkDescription = styled.span`
  margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
`
export const ErrorMessage = styled.label`
  color: #c70606;
  position: relative;
  margin-left: 0.2rem;
  top: 0.3rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.sizes.midle};
`
