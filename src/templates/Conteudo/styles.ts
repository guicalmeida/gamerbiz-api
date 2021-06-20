import styled from 'styled-components'

export const Container = styled.div`
  background: #030303;
  display: flex;
  height: 100vh;
`

export const EcosystemWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 85vh;
  width: 50vw;
  margin: auto 0 auto 2rem;

  & .titulo {
    position: absolute;
    z-index: 2;

    top: 36%;
    left: 25%;
    filter: drop-shadow(0 1px 1rem black);
  }
  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  align-items: center;
  width: 45vw;
`
export const ServicoInfo = styled.div`
  width: 40rem;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  align-items: center;
`
