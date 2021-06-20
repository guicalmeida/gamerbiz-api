import styled from 'styled-components'

export const Svg = styled.svg`
  width: 2000;
  height: 879;
  fill: none;

  &:not(.active) #bandeira path {
    fill: white;
  }

  &:not(.active) #desenho path {
    fill: #040404;
  }

  &:not(.active) #texto path {
    fill: white;
  }
`
