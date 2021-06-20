import styled, { css } from 'styled-components'
import { DescProps } from '.'

export const Container = styled.div<DescProps>`
  ${({ L, M }) => css`
    & p {
      font-size: ${L ? '2rem' : M ? '1.6rem' : '1.4rem'};
      font-weight: 300;
    }
  `}
`
