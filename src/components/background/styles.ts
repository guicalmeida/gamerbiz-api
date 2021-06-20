import styled, { css } from 'styled-components'

type BGImgProps = {
  imgSrc: string
}

export const BGImg = styled.div<BGImgProps>`
  ${({ imgSrc }) => css`
    background-image: url(${imgSrc});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: cover;
  `}
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`
