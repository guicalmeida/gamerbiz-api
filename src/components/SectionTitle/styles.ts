import styled, { css } from 'styled-components'
import { SectionTitleProps } from '.'

export const Container = styled.div<SectionTitleProps>`
  ${({ L, M }) => css`
    & h2 {
      font-size: ${L ? '6rem' : M ? '5rem' : '4rem'};
      font-weight: 300;
      text-transform: uppercase;
    }
    & b {
      font-weight: 900;
      text-transform: uppercase;


      .redText {
        color: #ff0000;
      }

      .orangeText {
        color: #ff4600;
      }

      &.gradient-text, & .gradient-text {
        background: rgb(240,0,0);
        background-image: linear-gradient(167deg, rgba(240,0,0,1) 0%, rgba(255,70,0,1) 100%);;
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        font-weight: 900;
    }
  `}
`
