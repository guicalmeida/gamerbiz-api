import styled from "styled-components";

const A = styled.a`
  display: flex;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  line-height: 1.8rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: #FAFAFA;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;

  &:hover {
    color: #FAFAFA;
    background: #F00000;
    border-left: 0.3rem solid #373435;
    text-decoration: none;
  }

  &:focus {
    color: #373435;
    text-decoration: none;
  }

  &:visited {
    color: #FAFAFA;
  }

  &.linkActive {
    color: #FAFAFA !important;
    background-color: #FF4600;
    border-left: 0.3rem solid #F00000;
  }
`;

export default A;
