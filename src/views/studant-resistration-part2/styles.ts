
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height:100vh;
  display: table-cell;
  vertical-align: middle;
`
export const Wrapper = styled.div`
  margin:auto;
  font-family: 'Inter',sans-serif;
  background: ${({theme})=> theme.colors.tertiary.white};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and  (max-width: 880px) {
    flex-direction: column-reverse;
    align-items:flex-start;
  }
`;

export const Form = styled.form`
  width: 41rem;
  padding:3.8rem 3.2rem;
  background: #F0F0F0;
  border-radius:.8rem;

  @media screen and  (max-width: 880px) {
    margin: auto;
  }

  @media screen and  (max-width: 668px) {
    width: 100%;
  }

  div.input{
    margin-top: 1.6rem;
  }
`
export const SelectContainer = styled.div`
  div{
    margin-top: 1.6rem;
    select {
      width: 100%;
      color: ${({ theme }) => theme.colors.secondary.xxxblue};
      option {
        font-size: ${({theme})=> theme.font.sizes.midle};
      }
    }
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
`;

export const BadayeInfo = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 9rem;

  @media screen and  (max-width: 880px) {
    margin:auto;
    margin-bottom: ${({theme})=> theme.spacings.xxxmultipleeight};
`;

export const Button = styled.button`
  margin-top: 1.6rem;
  width: 100%;
  height: 4.6rem;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primary.xblue};
  color: ${({ theme }) => theme.colors.tertiary.white};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  display: flex;
  align-items:center;
  justify-content: center;
  transition: 2s;
  svg{
    margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  }
  :hover {
    filter: brightness(0.7);
  }
`
