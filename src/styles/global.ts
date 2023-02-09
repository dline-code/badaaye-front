import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: Poppins;
    font-weight: 400;
    src: local('Poppins'), url(/fonts/Poppins-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 500;
    src: local('Poppins'), url(/fonts/Poppins-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 700;
    src: local('Poppins'), url(/fonts/Poppins-Bold.ttf) format('truetype');
  }

  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    html,
    body {
      min-height: 100%;
      scroll-behavior: smooth;
    }

    body {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding-bottom: 1.875rem;
      font-family: ${theme.font.family};
      background: ${theme.colors.tertiary.xwhite};
      color: ${theme.colors.secondary.xxblue};
    }

    body,
    input,
    select,
    button {
      font-size: ${theme.font.sizes.midle};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.bold};
    }

    button:not(:disabled) {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }

    li {
      list-style: none;
    }

    scrollbar-color: ${theme.colors.primary.xblue}
      ${theme.colors.secondary.xxblue};
    scrollbar-width: thin;

    ::-webkit-scrollbar {
      width: 0.5rem;
      background: #dedede;
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.xblue};
      border-radius: 0.25rem;
    }

    html {
      font-size: 62.5%;
    }
  `}`
