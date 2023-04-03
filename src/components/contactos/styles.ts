import styled from 'styled-components'

export const ContainerContacts = styled.section`
  width: 100%;
  background-color: #e5e5e5 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:${({theme})=>theme.spacings.xmultipleeight};

  @media screen and (max-width: 500px) {
    padding: ${({theme})=>theme.spacings.xxxmultipleeight};
    margin-bottom:12rem;
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
export const ContainerField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
  
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  span {
    font-size: ${({ theme }) => theme.font.sizes.midle};
    margin-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  textarea{
    height: 12rem;
    resize:none;
    border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
    border-radius: 0.25rem;
    padding: 1rem;
    font-size ${({ theme }) => theme.font.sizes.midle};
    background: ${({ theme }) => theme.colors.tertiary.contrast};
    :focus{
      border-color: var(--cui-input-focus-border-color, ${({ theme }) => theme.colors.primary.xblue});
      box-shadow: 0 0 0 0.25rem rgb(20 31 255 / 25%);
      color: var(--cui-input-focus-color, rgba(44, 56, 74, 0.95));
      background-color: var(--cui-input-focus-bg, #fff);
    }
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
  margin-top: ${({theme}) => theme.spacings.xxxmultipleeight};

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const FirstContainer = styled.div`
  @media screen and (max-width: 67rem) {
    margin-top: ${({theme})=>theme.spacings.xmultipleeight};
  }
  `

export const SecondContainer = styled.div`
  height: 30rem;
  color: ${({ theme }) => theme.colors.tertiary.gray};
  background-color: ${({ theme }) => theme.colors.tertiary.contrast} 0% 0%
    no-repeat padding-box;
  font-size: ${({ theme }) => theme.font.sizes.midle};

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
    font-size: ${({ theme }) => theme.font.sizes.midle };
    margin-left: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  i {
    font-size: ${({ theme }) => theme.font.sizes.midle};
  }
  div {
    margin: ${({theme}) => theme.spacings.xxxmultipleeight} 0;
  }
  iframe{
    width:54rem;
    height:26.5rem;
    border: 0;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`
