import styled from 'styled-components'

export const Wrapper = styled.main`
width: 100%;
height: 100vh;
background: ${({theme})=> theme.colors.tertiary.white};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
z-index: 1000;
  @media screen and  (max-width: 768px) {
    flex-direction: column-reverse;
    align-items:flex-start;
    position:relative;
    top:10rem;
  }
`;

export const Container = styled.div`
  max-width:80;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:9rem;

  @media screen and  (max-width: 768px) {
    flex-direction:column-reverse;
    margin:auto;
    gap:2rem;
  }
`
export const Form = styled.form`
  width: 30%;
  background: #F0F0F0;
  border-radius:8px;
  padding: ${({theme})=>theme.spacings.xxmultipleeight};
  @media screen and  (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-size:  ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.smallbold};
  margin-bottom: ${({ theme }) => theme.spacings.xxxmultipleeight};
`;

export const BadayeInfo = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12rem;
  @media screen and  (max-width: 768px) {
    margin:auto;
`;

export const TextArea = styled.textarea`
  width:100%;
  height: 30rem;
  resize: none;
  border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
  border-radius: 0.25rem;
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
    filter: brightness(0.7);
    transition: 2s;
  }
`
