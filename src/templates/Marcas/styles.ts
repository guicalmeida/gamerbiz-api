import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  height: 100vh;
`

export const HeadWrapper = styled.div`
  text-align: center;
  width: 55vw;
  & p {
    margin-top: 1rem;
  }
`
export const ServicosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ServicoLeft = styled.div`
  width: 40rem;
  height: 13rem;
  display: flex;
  align-items: flex-start;
  margin-top: 3.5rem;
  gap: 3rem;
`

export const ServicoRight = styled.div`
  width: 40rem;
  height: 13rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 3.5rem;
  gap: 3rem;

  & * {
    text-align: right;
  }
`

export const ServicoInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ServicosColUm = styled.div``
export const ServicosX = styled.div`
  & svg {
    transform: rotate(45deg);
    & g {
      opacity: 0.8;
    }
  }
`
export const ServicosColDois = styled.div``
export const ClientesWrapper = styled.div`
  text-align: center;
  & h3 {
    margin-bottom: 2rem;
  }
`
export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  justify-content: center;
  gap: 4rem;

  & > div > img {
    max-width: 20rem;
    height: 8rem;
  }
`
export const ClientLogoWrapper = styled.div``
