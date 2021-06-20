import styled from 'styled-components'

export const HeaderTitle = styled.h1`
  font-weight: 900;
  font-size: 6rem;
  color: #e5e5e5;
  text-transform: uppercase;

  .gradient-text {
    background-color: #ff4600;
    background-image: linear-gradient(270deg, #ff4600 2.77%, #f00000 97.07%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 900;
  }
  & span .redText {
    color: #ff0000;
  }

  .orangeText {
    color: #ff4600;
  }
`
