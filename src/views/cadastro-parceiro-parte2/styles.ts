import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  font-family: 'Inter',sans-serif;
  height: 100vh;
  background: ${({theme})=> theme.colors.tertiary.white};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and  (max-width: 568px) {
    flex-direction: column-reverse;
    align-items:flex-start;
    position:relative;
    top:13rem;
  }
`;

export const Form = styled.form`
  width: 43rem;
  background: #F0F0F0;
  border-radius:.8rem;
  padding: 3.2rem;
  @media screen and  (max-width: 568px) {
    margin-top: ${({theme})=> theme.spacings.xxxmultipleeight};
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size:  2.1rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.xxxmultipleeight};
  @media screen and  (max-width: 568px) {
    text-align: center;
  }
`;

export const BadayeInfo = styled.div`
  width: 43rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12rem;
  @media screen and  (max-width: 768px) {
    margin:auto;
`;

export const TextArea = styled.textarea`
  width:100%;
  height: 34rem;
  resize: none;
  border-radius: 0.25rem;
  font-size: 1.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
  background: ${({ theme }) => theme.colors.tertiary.white};
  margin:${({theme})=>theme.spacings.xxxmultipleeight} 0;
  padding: ${({theme})=>theme.spacings.xxxxmultipleeight};
`;

export const Button = styled.button`
  width: 100%;
  height: 4.6rem;
  border: none;
  transition: 2s;
  cursor: pointer;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  display: flex;
  align-items:center;
  justify-content: center;
  svg{
    margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  }
  :hover {
    filter: brightness(0.9);
  }
`
