import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-600 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* montserrat-900 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local(''),
       url('/fonts/montserrat-v15-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('/fonts/montserrat-v15-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 900;
  src: local(''),
       url('../fonts/montserrat-v15-latin-900italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/montserrat-v15-latin-900italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

  html{
    font-size: 10px;
    scroll-behavior: smooth;
    overflow: hidden;

    & * {
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(102deg, #ff0000 13%, #ff4600 28%);
        border-radius: 15px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(13deg, #ff4600 26%, #ff0000 48%);
      }
      &::-webkit-scrollbar-track {
        background: #060606;
        border-radius: 15px;
        box-shadow: inset 7px 10px 12px #060606;
      }
    }
  }

  body{
    background: #040404;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #E5E5E5;
    scroll-snap-type: y mandatory;
    overflow: scroll;
    height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth;

    & .section {
      scroll-snap-align: start;
    }

    & p, h1, h2, h3 {
      z-index: 1;
      position: relative;
    }

  }
`

export default GlobalStyles
