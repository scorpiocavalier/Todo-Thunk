import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 { margin: 0; }

  button {
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 5px;
    background: none;
  }

  button.create-todo:hover {
    background: slateblue;
    color: white;
  }

  button.mark-as-completed:hover {
    background: green;
    color: white;
  }

  button.remove:hover {
    background: darkred;
    color: white;
  }
`