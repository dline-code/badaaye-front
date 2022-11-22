import styled from "styled-components";

export const Container = styled.div`
  margin-top:${({theme})=>theme.spacings.xxxmultipleeight};
  background: #5C63EF;
  color: #FFF;
  width: 100%;
  height: 4.8rem;
  border:none;
  display: flex;
  align-items:center;
  justify-content:center;
  gap:.6rem;
  cursor: pointer;
  border-radius:4px;
`;
