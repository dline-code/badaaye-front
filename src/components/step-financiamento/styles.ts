import styled from 'styled-components'

export const Lista = styled.ul`
  min-width: 100%;
  height: 25rem;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.xblue};
`

export const Container = styled.li`
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
    border: 2px solid ${({ theme }) => theme.colors.tertiary.xwhite};
  }
`

export const TitleHead = styled.h2`
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const Title = styled.h3`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const Step = styled.h3`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
`

export const Description = styled.p`
  margin-top: 1rem;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
`
