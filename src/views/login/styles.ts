import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100% auto;
  height: 100vh;
  padding: $({theme})=> theme.spacings.xxxmultipleeight;
  display: flex;
  flex-wrap: wrap;
  justify-content:  center;
  align-items: center;

  @media screen and (max-width: 511px){
    height: 100%;
    flex-direction: column;
    padding: 0 !important;
  }
`
export const LayoutAuthContainer = styled.div`
  width: 40rem;
  margin-right: 9.6rem;

  a {
    color: ${({ theme }) => theme.colors.secondary.xxxblue};
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.2rem;
    font-weight: ${({theme})=> theme.font.bold};
  }
  i{
    margin-left: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width:948px){
    margin-right: 0;
    margin-bottom: 4rem;
    a{
      display: none;
    }
  }
`
export const Form = styled.form`
  width: 44.8rem;
  padding: ${({theme})=> theme.spacings.xmultipleeight} 3.3rem;
  background: #f0f0f0;
  border-radius: .8rem;

  .input {
    margin-bottom: 1.6rem;
  }
  .button{
    margin: 3.2rem 0;
  }

  @media screen and (max-width: 511px){
    width: 100%;
    margin-bottom: 0;
  }
`
export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.smallbold};
  font-weight: ${({ theme }) => theme.font.smallbold};
  line-height: 3rem;
  margin-bottom: 3.2rem;

  @media screen and (max-width: 511px){
    text-align: center;
  }
`
export const ForgetPasswordLink = styled.div`
  color: ${({ theme }) => theme.colors.tertiary.xxcinza};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  display: flex;
  justify-content: right;

  a:hover {
    color: ${({theme})=> theme.colors.secondary.xxblue};
    transition: ${({theme})=> theme.transition.default};
  }
`
export const CreateAccountLink = styled(ForgetPasswordLink)`
  justify-content: center;
  margin-bottom: 3.2rem;
`
export const SocialMediaContainer = styled.div`
  width: 100%;
`
export const SocialMediaTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.tertiary.xxcinza};

  ::before, ::after {
    position: absolute;
    content: '';
    top: 50%;
    width: 33%;
    height: .2rem;
    background: #E2E2E2;
  }
  ::before {
    left: 0;
  }
  ::after{
    right: 0;
  }
`
export const SocialMediaList = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SocialMediaItem = styled.div`
  a {
    width: 12rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.8rem;
    color: ${({theme})=> theme.colors.primary.xblue};
    border: 1px solid #E2E2E2;
    border-radius: .8rem;
  }
`