import styled from 'styled-components'

export const Card = styled.div`
  width: 75%;
  height: 26rem;
  padding: 5rem 3rem;
  background: #f4f4f4;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 0.4rem;
  transition: 2s;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.5;

  :hover {
    transition: 2s;
    transform: scale(0.9);
    cursor: pointer;
  }
`

export const Title = styled.h3`
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const PreviousPrice = styled.h2`
  text-decoration: line-through;
  margin-top: ${({ theme }) => theme.spacings.xxxmultipleeight};
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxblue};
`

export const NextPrice = styled.h3`
  color: ${({ theme }) => theme.colors.primary.xblue};
`
