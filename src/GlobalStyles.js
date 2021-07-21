import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Eczar', serif;
    }

    html, body {
        width: 100vw;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
`

export default GlobalStyle;