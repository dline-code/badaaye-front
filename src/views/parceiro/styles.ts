import styled from 'styled-components'

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%auto;
  height: 70rem;
  margin-top: -3rem;
  padding: 0 10rem;
  background: ${({theme})=> theme.colors.tertiary.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const Form = styled.form`
  width: 32%;
  height: 58rem;
  padding: 5rem 4rem;
  background: #f0f0f0;

  .input {
    margin-top: 1.5rem;
  }
  
  .button {
    margin-top: ${({theme})=> theme.spacings.xxmultipleeight};
  }
  div#select div{
    margin-top: 1.5rem;

    select {
      width: 100%;
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
      option {
        font-size: ${({theme})=> theme.font.sizes.midle};
      }
    }
  }
`

export const Description = styled.div`
  width: 100%;
  margin-top: ${({theme})=> theme.spacings.xxxmultipleeight};
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
  margin-top: -15px;
  font-size: ${({ theme }) => theme.font.smallbold};
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
`

export const Container = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12rem;
`

export const ContainerRadios = styled.div`
  width: 100%auto;
  height: 23.5rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  font-weight: ${({ theme }) => theme.font.smallbold};
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`

export const LinkDescription = styled.span`
  margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
`
