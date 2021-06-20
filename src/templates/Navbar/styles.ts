import styled from 'styled-components'

export const Container = styled.div`
  height: 7rem;
  position: fixed;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  width: calc(100vw - 6px);
  background-color: #060606;

  & > * {
    margin: 0 3rem;
  }
`

export const LogoWrapper = styled.div`
  height: 5.5rem;
  width: 17rem;

  & svg {
    width: 100%;
    height: 100%;
    transition: 0.5s ease-out;
  }
`

export const ItemsWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`
export const UList = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`
export const Item = styled.li`
  font-size: 1.5rem;
  margin: 0 2.5rem;
`
export const NavTo = styled.a`
  text-decoration: none;
  color: #e5e5e5;
  cursor: pointer;

  &:active,
  &:visited,
  &:focus {
    text-decoration: none;
    border: none;
    outline: none;
  }

  &.active {
    background: rgb(240, 0, 0);
    background-image: linear-gradient(
      167deg,
      rgba(240, 0, 0, 1) 0%,
      rgba(255, 70, 0, 1) 100%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    & > li {
      font-size: 1.6rem;
      font-weight: 900;
    }

    & > div {
      background-image: url('img/LogoColors.svg');
      transition: background-image 0.5s ease-in;
    }
  }
`

export const Contato = styled.button`
  border: 1px solid #e5e5e5;
  background-color: #060606;
  box-sizing: border-box;
  border-radius: 48px;
  cursor: pointer;
  width: 11rem;
  height: 3.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: #e5e5e5;
`
