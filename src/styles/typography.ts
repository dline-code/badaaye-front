import styled, { AnyStyledComponent, css } from 'styled-components'

type Color =
  | 'primary.orange'
  | 'secondary.green'
  | 'secondary.lightGreen'
  | 'secondary.red'
  | 'secondary.darkBlue'
  | 'secondary.blue'
  | 'neutral.black'
  | 'neutral.darkGrey'
  | 'neutral.grey'
  | 'neutral.lightGrey'
  | 'neutral.extraLightGrey'
  | 'neutral.white'

function withColor<T extends AnyStyledComponent>(Component: T) {
  return styled(Component)<{ color?: Color }>`
    color: ${({ theme, color }) =>
      color
        ? theme.colors[color.split('.')[0]][color.split('.')[1]]
        : 'inherit'};
  `
}
export default {
  Subtitles: {
    Sub1: withColor(styled.span`
      display: block;
      font-size: ${({ theme }) => theme.font.sizes.large};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: 2.4rem;
    `),
    Sub2: css`
      font-size: ${({ theme }) => theme.font.sizes.small};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
    `
  },
  Text: {
    Body2: withColor(styled.p`
      font-size: ${({ theme }) => theme.font.sizes.small};
      line-height: 2rem;
    `)
  },
  SmallText: {
    Caption1: css`
      font-size: ${({ theme }) => theme.font.sizes.xsmall};
      line-height: ${({ theme }) => theme.font.sizes.medium};
      font-weight: ${({ theme }) => theme.font.regular};
    `
  },
  Titles: {
    H6: css`
      font-size: ${({ theme }) => theme.font.sizes.large};
      font-weight: ${({ theme }) => theme.font.medium};
      line-height: ${({ theme }) => theme.spacings.small};
    `
  },
  Buttons: {
    Button1: withColor(styled.span`
      background-color: transparent;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      border: none;
      font-size: ${({ theme }) => theme.font.sizes.small};
      font-weight: ${({ theme }) => theme.font.medium};
      cursor: pointer;
    `)
  }
}
