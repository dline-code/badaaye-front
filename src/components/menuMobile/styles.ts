import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: none;
  transform: translateY(0);
  transition: 0s;

  @media (max-width: 1124px) {
    display: flex;
    min-width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1000;
    padding: 3rem 5rem;
    flex-direction: column;
    align-items: flex-end;
    background: rgba(17, 18, 17, 0.95);
    background: linear-gradient(
      34deg,
      rgba(25, 88, 150, 1) 0%,
      rgba(17, 18, 17, 0.95) 95%
    );
  }
`

export const Icon = styled.span`
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  cursor: pointer;
  transition: 0.7s;
  :hover {
    transform: rotate(45deg);
    transition: 0.7s;
  }
`

export const Lista = styled.ul`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Item = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-size: 1.8rem;
  line-height: 3;
  transition: 1s;

  :hover {
    transform: scale(1.2);
    transition: 1s;
    cursor: pointer;
  }
`
