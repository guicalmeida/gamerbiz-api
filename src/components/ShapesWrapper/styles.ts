import styled from 'styled-components'

const RandomRotate = () => {
  return `${Math.floor(Math.random() * 360)}deg`
}

const RandomPercent = () => {
  let randomNumber = Math.ceil(Math.random() * 100)
  while (randomNumber < 5) {
    randomNumber = Math.ceil(Math.random() * 100)
  }
  return `${randomNumber}%`
}

export const SquareContainer = styled.div`
  width: 15rem;
  height: 15rem;
  position: absolute;
  animation: moveSquare 20s linear infinite alternate;

  & > svg {
    height: 100%;
    width: 100%;
  }

  @keyframes moveSquare {
    0% {
      top: ${RandomPercent};
      left: ${RandomPercent};
      transform: translate(${RandomPercent}, ${RandomPercent});
      transform: rotate(${RandomRotate});
    }
    100% {
      top: calc(100% - ${RandomPercent});
      left: calc(100% - ${RandomPercent});
      transform: rotate(${RandomRotate});
      transform: translate(
        calc(100% - ${RandomPercent}),
        calc(100% - ${RandomPercent})
      );
    }
  }
`
export const XContainer = styled.div`
  width: 15rem;
  height: 15rem;
  position: absolute;
  animation: moveX 20s linear infinite alternate;

  & > svg {
    height: 100%;
    width: 100%;
  }
  @keyframes moveX {
    0% {
      top: ${RandomPercent};
      left: ${RandomPercent};
      transform: translate(${RandomPercent}, ${RandomPercent});
      transform: rotate(${RandomRotate});
    }
    100% {
      top: calc(100% - ${RandomPercent});
      left: calc(100% - ${RandomPercent});
      transform: rotate(${RandomRotate});
      transform: translate(
        calc(100% - ${RandomPercent}),
        calc(100% - ${RandomPercent})
      );
    }
  }
`
export const TriContainer = styled.div`
  width: 15rem;
  height: 15rem;
  position: absolute;
  animation: moveTri 20s ease-in-out infinite alternate;

  & > svg {
    height: 100%;
    width: 100%;
  }

  @keyframes moveTri {
    0% {
      top: ${RandomPercent};
      left: ${RandomPercent};
      transform: translate(${RandomPercent}, ${RandomPercent});
      transform: rotate(${RandomRotate});
    }
    100% {
      top: calc(100% - ${RandomPercent});
      left: calc(100% - ${RandomPercent});
      transform: rotate(${RandomRotate});
      transform: translate(
        calc(100% - ${RandomPercent}),
        calc(100% - ${RandomPercent})
      );
    }
  }
`
export const CircleContainer = styled.div`
  width: 15rem;
  height: 15rem;
  position: absolute;
  animation: moveCircle 30s linear infinite alternate;

  & > svg {
    height: 100%;
    width: 100%;
  }

  @keyframes moveCircle {
    0% {
      top: ${RandomPercent};
      left: ${RandomPercent};
      transform: translate(${RandomPercent}, ${RandomPercent});
      transform: rotate(${RandomRotate});
    }
    100% {
      top: calc(100% - ${RandomPercent});
      left: calc(100% - ${RandomPercent});
      transform: rotate(${RandomRotate});
      transform: translate(
        calc(100% - ${RandomPercent}),
        calc(100% - ${RandomPercent})
      );
    }
  }
`

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  z-index: 0;
`
