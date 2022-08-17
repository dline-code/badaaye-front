export const theme = {
  border: {
    solid: (color: string) => `0.1rem solid ${color}`
  },
  font: {
    family:
      "Poppins, -apple-system, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      title: '2.25rem',
      xsubtitle: '2rem',
      xxsubtitle: '1.5rem',
      xtext: '1.25rem',
      xxtext: '1rem',
      maxcontainer: '70rem'
    }
  },
  colors: {
    primary: {
      blue: '#5c63ef'
    },
    secondary: {
      title: '#292b52',
      text: '#5d5e7a'
    },
    tertiary: {
      background: '#f8f8f8',
      contrast: '#f4f4f4',
      white: '#fff'
    },
    shades: {
      black: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
      darkGrey: (opacity: number) => `rgba(105, 105, 105, ${opacity})`,
      white: (opacity: number) => `rgba(255, 255, 255, ${opacity})`
    },
    linear: {
      darkBlue: `linear-gradient(89.66deg, #1D2236 0.42%, rgba(29, 34, 54, 0.8) 32.52%, rgba(29, 34, 54, 0.4) 99.84%)`,
      black: `linear-gradient(180deg, rgba(17, 24, 32, 0.4) 0%, #111820 100%)`
    }
  },
  spacings: {
    xmultipleeight: '5rem',
    xxmultipleeight: '2.5rem',
    xxxmultipleeight: '2rem',
    xxxxmultipleeight: '1rem',
    xxxxxmultipleeight: '0.5rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '1s ease-in-out'
  }
}
