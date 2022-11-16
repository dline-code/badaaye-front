import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items:center;
  @media screen and  (max-width: 768px) {
    flex-direction: column-reverse;
    align-items:flex-start;
    padding-top:18rem;
  }
  `

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:9rem;
  flex-wrap: wrap;
  @media screen and  (max-width: 768px) {
    flex-direction:column-reverse;
    margin:auto;
    gap:3rem;
  }
`
export const Form = styled.form`
  width: 348px;
  height: max-content;
  background: #F0F0F0;
  padding: ${({theme})=>theme.spacings.xxmultipleeight};
`

export const Title = styled.h3`
  font-size:  ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.smallbold};
`;

export const InputContainer = styled.div`
  background: #F4F4F4;
  border: 1.75px solid #AAAAAA;
  width: 100%;
  height: 42px;
  align-items:center;
  display: flex;
  margin-top:${({theme})=>theme.spacings.xxmultipleeight};
  padding: ${({theme})=>theme.spacings.xxxxmultipleeight};
`

export const Input = styled.input`
  flex:1;
  height:100%;
  border: none;
  background: none;
`;

export const TextArea = styled.textarea`
  width:100%;
  height: 235px;
  resize: none;
  border: 1.75px solid #AAAAAA;
  margin-top:${({theme})=>theme.spacings.xxxmultipleeight};
  padding: ${({theme})=>theme.spacings.xxxxmultipleeight};
`;

export const Button = styled.button`
  margin-top:${({theme})=>theme.spacings.xxxmultipleeight};
  background: #5C63EF;
  color: #FFF;
  width: 100%;
  height: 42px;
  border:none;
  display: flex;
  align-items:center;
  justify-content:center;
  gap:.6rem;
`;
