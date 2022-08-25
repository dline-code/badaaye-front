import styled from 'styled-components'

export const Container = styled.div`
  width: 100%auto;
  height: 35rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;
`
export const Title = styled.h2`
  width: 30%;
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Description = styled.div`
  width: 35%;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Benefits = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
`
