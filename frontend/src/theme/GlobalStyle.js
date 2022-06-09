import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');

  *, *::before, &::after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  html {
      font-size: 62.5%;
  }



  body { 
    padding-left: 150px;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }

  .articles {
    background-color: ${theme.articles} !important;
  }

  .notes {
    background-color: ${theme.notes} !important;
  }

  button { 
    cursor: pointer;

    &:hover { 
      filter: brightness(1.033);
      transition: filter 0.25s ease-in-out;
    }
  }

`;

export default GlobalStyle;
