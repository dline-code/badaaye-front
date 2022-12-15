
import styled from 'styled-components'

export const Wrapper = styled.main`
width: 100%;
font-family: 'Inter',sans-serif;
height: 100vh;
background: ${({theme})=> theme.colors.tertiary.white};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
z-index: 1000;
  @media screen and  (max-width: 768px) {
  @media screen and  (max-width: 568px) {
    flex-direction: column-reverse;
    align-items:flex-start;
    position:relative;
    top:10rem;
  }
  `;

export const Form = styled.form`
  width: 42rem;
  background: #F0F0F0;
  border-radius:.8rem;
  padding: 3.2rem;
  @media screen and  (max-width: 568px) {
    margin-top:2rem;
    width: 100%;
  }

  div#input{
    margin-top: 1.5rem;
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
`

export const Title = styled.h3`
  font-size:  2.1rem;
  font-weight:  ${({ theme }) => theme.font.bold};
  margin-bottom: ${({ theme }) => theme.spacings.xxxmultipleeight};
`;
export const BadayeInfo = styled.div`
  width: 46rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12rem;
  @media screen and  (max-width: 768px) {
    margin:auto;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
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
