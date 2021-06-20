import styled from 'styled-components'

export const Container = styled.div``

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  margin: 5rem 0 0 5rem;
  & p {
    margin-top: 1rem;
  }
`

export const LogoBG = styled.div`
  background-color: #060606;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  position: relative;

  & > svg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`

export const PCImg = styled.img`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  align-items: center;
  position: absolute;
`

export const ShapesBG = styled.div`
  position: absolute;
  width: 50vw;
  height: 80vh;
  right: 0;
  top: 0;
`
export const ShapesFirst = styled.div`
  position: absolute;
  width: 30vw;
  height: 80vh;
  left: 0;
  top: 0;
`
