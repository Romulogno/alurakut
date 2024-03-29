import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
/* Reset geral*/
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #D9E6F6;
  }

  #__next{
    display:flex;
    min-height:100vh;
    flex-direction:column;
  }
/* Reset de imagem*/
  img{
    max-width:100%;
    heigth:auto;
    display:block;
  }
${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red', secondary: 'blue',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

