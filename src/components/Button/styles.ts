import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Button = styled.button<ButtonProps>`
  height: 6rem;
  background: linear-gradient(
    167deg,
    rgba(240, 0, 0, 1) 0%,
    rgba(255, 70, 0, 1) 100%
  );
  position: relative;
  border-radius: 48px;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  ${({ L, M }) => css`
    width: ${L ? '35rem' : M ? '30rem' : '25rem'};
  `}
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  transition: transform 0.3s linear;

  &:hover,
  &:hover:after {
    transform: scale(1.03);
    transition: transform 0.3s linear;
    border: none;
    filter: none;
  }

  &:before {
    content: '';
    background: linear-gradient(
      167deg,
      rgba(240, 0, 0, 1) 0%,
      rgba(255, 70, 0, 1) 20%,
      rgba(240, 0, 0, 1) 80%,
      rgba(255, 70, 0, 1) 100%
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s linear;
    border-radius: 48px;
    transform: scale(1.03);
    transition: transform 0.3s linear;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 48px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`
