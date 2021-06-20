import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(180deg, #2d0101 0%, #030303 18.23%);
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 3rem;
  justify-content: space-around;
  position: relative;
`
export const Mesh = styled.img`
  bottom: 0;
  position: absolute;
  width: 100%;
  object-fit: contain;
`

export const HeadWrapper = styled.div`
  text-align: center;
  width: 46vw;
  & p {
    margin-top: 1rem;
  }
`
export const PlayerDiv = styled.div`
  position: relative;
  display: flex !important;
  flex-direction: column;
  align-items: center;
`
export const ShapeWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  & > div {
    position: relative;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`

export const PlayerTxtCard = styled.div`
  width: max-content;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  font-weight: 300;

  .playerName {
    font-weight: 600;
  }
`

export const SliderWrapper = styled.div`
  width: 60%;
  height: 55%;
  position: relative;
  z-index: 4;

  .slick-slider {
    height: 55%;

    position: relative;
    margin: auto auto 0 auto;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    display: flex;
    overflow: hidden;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-start;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    margin-left: 2.6rem;
    float: left;
    height: 100%;
    min-height: 1px;
    filter: grayscale(100%);
    transition: filter 0.7s linear;

    & img {
      width: 20rem;
      max-height: 20rem;
    }

    & ${ShapeWrapper} {
      width: 20rem;
      transform: translate(-4%, 5%);
      z-index: -1;
    }

    & .playerName,
    .playerInfo {
      opacity: 0;
      transition: opacity 0.3s linear;
    }
  }

  .slick-center {
    filter: none;
    transition: filter 0.7s linear;

    & img {
      width: 30rem;
      max-height: 30rem;
      transition: 0.3s linear;
    }
    & .playerName,
    .playerInfo {
      opacity: 1;
      transition: opacity 0.3s linear;
    }
    & ${ShapeWrapper} {
      width: 30rem;
      transform: rotate(180deg);
      transition: 0.7s ease-out;

      & > div {
        align-items: center;
      }
    }
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots {
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
  }
  .slick-dots li {
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-size: 4rem;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.25;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }

  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 3rem;
    line-height: 1;

    opacity: 0.75;
    background-color: #ff4600;
    background-image: linear-gradient(270deg, #ff4600 2.77%, #f00000 97.07%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 900;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: '◄';
  }
  [dir='rtl'] .slick-prev:before {
    content: ' ►';
  }

  .slick-next {
    right: -25px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: '►';
  }
  [dir='rtl'] .slick-next:before {
    content: '◄';
  }
`
