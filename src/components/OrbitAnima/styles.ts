import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;

  & svg {
    height: 100%;
    width: 100%;
    overflow: visible;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  #ring1 {
    animation: rotate 40s linear reverse infinite;
    transform-origin: 48.5% 51.5%;
  }

  #ring2 {
    animation: rotate 60s linear alternate infinite;
    transform-origin: 48.5% 51.5%;
  }
  #ring3 {
    animation: rotate 70s linear reverse infinite;
    transform-origin: 48.5% 51.5%;
  }
  #ring4 {
    animation: rotate 50s linear alternate infinite;
    transform-origin: 48.5% 51.5%;
  }
  #ring5 {
    animation: rotate 100s linear reverse infinite;
    transform-origin: 48.5% 51.5%;
  }
`
