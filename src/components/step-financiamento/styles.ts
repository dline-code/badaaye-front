import styled from 'styled-components'

export const List = styled.ul`
  min-width: 100%;
  height: 25rem;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.xblue};
`

export const Container = styled.div`
  width: 20%;
  list-style: none;
`

export const Item = styled.li`
  width: 20%;
  list-style: none;
  display: flex;
  flex-direction: column;

  :before {
    content: '';
    display: block;
    border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Step = styled.h3`
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
`

export const Description = styled.p`
  line-height: 1.5;
  margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
`
