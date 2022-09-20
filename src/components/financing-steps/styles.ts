import styled from 'styled-components'

export const List = styled.ul`
  min-width: 100%;
  height: 26rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.xblue};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    height: 85rem;
  }
`

export const Box = styled.div`
  min-width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    flex-direction: column;
    align-items: center;
    padding: 0 4rem;
  }
`

export const Container = styled.div`
  width: 20%;
  list-style: none;

  .download:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 1s;
    color: ${({ theme }) => theme.colors.secondary.xxblue};
    font-weight: ${({ theme }) => theme.font.medium};
  }

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Item = styled.li`
  width: 16%;
  list-style: none;
  display: flex;
  flex-direction: column;

  :before {
    content: '';
    display: block;
    border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  }

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    width: 100%;
    margin-top: 6rem;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.tertiary.xwhite};

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    text-align: center;
  }
`

export const Download = styled.h3`
  line-height: 1.5;
  margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  transition: 1s;

  @media screen and (min-width: 280px) and (max-width: 1026px) {
    text-align: center;
  }
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
  transition: 1s;
`
