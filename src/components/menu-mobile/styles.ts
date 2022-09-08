import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: none;
  transform: translateY(0);
  transition: 0s;

  @media (max-width: 1142px) {
    display: flex;
    min-width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1000;
    padding: 2rem 5rem;
    flex-direction: column;
    align-items: flex-end;
    background: rgba(17, 18, 17, 0.95);
    background: linear-gradient(
      34deg,
      rgba(25, 90, 200, 1) 0%,
      rgba(17, 18, 17, 1) 95%
    );
  }

  @media (max-width: 500px) {
    padding: 2rem 3rem;
  }
`

export const ContainerLogo = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const IconClose = styled.span`
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  cursor: pointer;
  transition: 0.7s;
  :hover {
    transform: rotate(45deg);
    transition: 0.7s;
  }
`

export const List = styled.ul`
  min-width: 100%;
  height: 62rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
`

export const Item = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xxcinza};
  font-size: 1.7rem;
  line-height: 2.5;

  :first-child {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xxcinza};
  }
`

export const Ancora = styled.a`
  transition: 2s;
  :hover {
    color: ${({ theme }) => theme.colors.primary.xblue};
    transition: 2s;
    cursor: pointer;
  }
`

export const Resume = styled.div`
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-size: 1.7rem;
  line-height: 2;
  padding: 2rem 0;
`

export const ContainerIcons = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
`

export const Icon = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  transition: 2s;
  font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
  margin-left: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xwhite};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};

  :first-child {
    margin-left: 0;
  }

  :hover {
    filter: brightness(0.7);
    cursor: pointer;
    transition: 2s;
    transform: scale(1.1, 1.1);
    border: 0.2rem solid orange;
    color: orange;
  }
`
