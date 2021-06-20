import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    180deg,
    #030303 0%,
    #350101 50%,
    #4a0101 80.73%,
    #2d0101 100%
  );
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .tilt {
    position: relative;
    z-index: 2;
  }
`
export const ShirtWrapper = styled.div`
  height: 53rem;
  width: 43rem;
  margin-right: 13px;

  & img {
    height: 53rem;
    filter: drop-shadow(0px 0px 9px #00000030);
  }
`

export const ShirtContainer = styled.div`
  position: absolute;
`
export const SquareContainer = styled.div`
  position: absolute;
  height: 40rem;
  width: 40rem;
  top: 30%;

  & svg {
    height: 100%;
    width: 100%;
    & g {
      opacity: 1;
      & rect {
        stroke-width: 3;
      }
    }
  }
`

export const ShirtContentContainer = styled.div`
  display: flex;
  position: relative;
  gap: 10rem;
`
export const ServicoInfo = styled.div`
  width: 32rem;
  height: 13rem;
  text-align: right;
  position: relative;

  &.direita {
    text-align: left;
  }

  &.curta {
    width: 25rem;
  }
`
export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  height: 53rem;
  gap: 10rem;

  &.colDir {
    align-items: flex-start;
    padding-bottom: 15rem;
  }
  &.colEsq {
    padding-top: 10rem;
  }
`

export const ArrowContainer = styled.div`
  position: absolute;

  &.topRight {
    top: 0;
    left: 0;
    transform: scaleY(-1) translate(-20rem, -8rem);
  }
  &.botRight {
    transform: scaleX(-1) translate(19rem, 3rem);
    bottom: 0;
    left: 0;
  }
  &.topLeft {
    bottom: 0;
    right: 0;
    transform: translate(20rem, 2rem);
  }
  &.botLeft {
    transform: scaleX(-1) translate(-19rem, -3rem);
    bottom: 0;
    right: 0;
  }
`
export const ButtonContainer = styled.div`
  transform: translateY(4rem);
`
