import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Lato", sans-serif;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`;
