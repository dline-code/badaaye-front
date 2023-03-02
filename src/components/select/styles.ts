
import styled from 'styled-components'

export const Select = styled.select`
  height: 2rem;
  width: 14rem;
  border: none;
  position: relative;
  margin-left: 1rem;
  border: none;
  background: ${({theme}) => theme.colors.tertiary.white};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: ${({ theme }) => theme.font.sizes.small};

  option {
    width: 14rem;
    position: absolute;
    z-index: 10;
    margin: 3px;
    padding: 6px 8px;
    text-shadow: none;
    border-radius: 3px;
    cursor: pointer;
  }
`
