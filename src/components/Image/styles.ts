import styled, { css } from 'styled-components'
import { ClienteProps } from '.'

export const Img = styled.img<ClienteProps>`
  height: 100%;
  object-fit: contain;
  ${({ bw }) => css`
    filter: ${bw ? 'grayscale(100%)' : ''};
  `}
`
