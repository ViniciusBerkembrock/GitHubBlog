import { createGlobalStyle } from "styled-components";
import { mixins } from "./mixins";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 10;
    box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors["base-background"]};
        color: ${(props) => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
    ${mixins.fonts.textM};
    line-height: 160%;
    }
    
    button {
    border: none;
    cursor: pointer;
    }    
`;
