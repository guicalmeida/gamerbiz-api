import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    align-items: flex-start;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  height: 50rem;
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 6.5rem;
  padding-left: 5rem;

  @media only screen and (max-width: 767px) {
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 0;
    width: 90vw;
    gap: 1rem;

    text-align: center;

    & h2 {
      font-size: 3.5rem;
    }
    & p {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    align-items: flex-start;
    justify-content: center;
  }
`

export const EscudoWrapper = styled.div`
  height: 50rem;
  margin: auto;
  position: relative;
`
export const NeonWrapper = styled.div`
  position: absolute;
  top: -16px;
  width: 107%;
  height: 106%;
  right: -9px;

  & svg {
    width: 100%;
    height: 100%;

    @keyframes dash {
      0% {
        stroke-dashoffset: 2223;
      }
      25% {
        stroke-dashoffset: 0;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    & > g > path {
      animation: dash 8s linear infinite;
      stroke-width: 10px;
      stroke-dasharray: 2223;
    }
  }
`
