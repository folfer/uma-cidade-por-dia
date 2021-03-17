import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Barlow', sans-serif;
  }

  @media(max-width: 1500px) {
  html {
    font-size: 95.75%;
  }
}

  @media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
  body {
    -webkit-font-smoothing: antialiased;
    background: #F2F5F8;
  }
  button, select {
    outline: none;
    border: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    font-family: 'Barlow Condensed', sans-serif;
  }

  h5 {
    font-family: 'Barlow Condensed', sans-serif;
  }

  sup {
    font-family: 'Montserrat', sans-serif !important;
  }
`;
