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
    padding-top:23rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:9rem;
  flex-wrap: wrap;
  @media screen and  (max-width: 768px) {
    flex-direction:column-reverse;
    margin:auto;
    gap:2rem;
  }
`
export const Form = styled.form`
  width: 41rem;
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
`;

export const Input = styled.input`
  flex:1;
  height:100%;
  border: none;
  background: none;
`;

export const TextArea = styled.textarea`
  width:100%;
  height: 33rem;
  resize: none;
  border: 1.75px solid #AAAAAA;
  border-radius:4px;
  margin-top:${({theme})=>theme.spacings.xxxmultipleeight};
  padding: ${({theme})=>theme.spacings.xxxxmultipleeight};
`;
