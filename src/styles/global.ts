import {createGlobalStyle} from 'styled-components'

export const GlobalPok = createGlobalStyle `
  *{
      font-family: 'Fira Mono', monospace;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #FFCB08;
  }

  h1, h3, p, button {
      color: #0C4DA2;
  }

  button{
    cursor: pointer;
  }


`;