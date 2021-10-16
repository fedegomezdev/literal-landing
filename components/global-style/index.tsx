import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Verdana';
      }
      * {
        box-sizing: border-box;
      }
      button {
        &:focus {
          outline: none;
        }
        -webkit-tap-highlight-color: transparent;
      }
`;

export default GlobalStyle;
