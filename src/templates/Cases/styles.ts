import styled from 'styled-components'

type ContainerProps = {
  show: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10rem;
`

export const Mesh = styled.img`
  position: absolute;
  width: 100%;
  object-fit: contain;

  &.rotate {
    transform: rotate(180deg);
    top: 0;
  }
  &.normal {
    bottom: 0;
  }
`

export const SliderWrapper = styled.div`
  margin-bottom: 7rem;
  .slick-slider {
    position: relative;
    margin: auto;
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
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 85rem;
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
    align-items: flex-end;
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
    display: none;

    float: left;
    height: 100%;
    min-height: 1px;
  }

  .slick-center {
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
    left: -40px;
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
export const CaseDiv = styled.div`
  display: flex !important;
  width: 93rem;
  height: 35rem;
  align-items: flex-start;
  gap: 6rem;
  background-color: #332d2b63;
  border-radius: 1rem;

  & > img {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    margin: auto 2rem;
  }
`
export const CaseTxtCard = styled.div`
  margin: auto;
  & h3 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 2rem;
  }
`

export const OpenCase = styled.a`
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
`

export const Sinopse = styled.p`
  font-size: 2rem;
  font-weight: 300;
  text-align: left;
  margin-right: 2rem;
`

export const ModalContainer = styled.div`
  & h3 {
    font-size: 5rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    margin-top: 2rem;
  }
  & p {
    font-size: 2rem;
    text-align: justify;
    font-weight: 300;
  }
  & > img {
    width: 100%;
    height: 40vh;
    object-fit: contain;
    margin: 3rem auto;
  }
`
export const Close = styled.a`
  font-size: 2rem;
  font-weight: 600;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  & img {
    height: 40rem;
    max-width: 80rem;
    margin: auto;
  }
`

export const CaseGalerySlider = styled.div`
  margin: 4rem 0;

  .slick-slider {
    position: relative;
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
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
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
    display: block;
    margin: auto;
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
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
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
    font-size: 4rem;
    line-height: 1;

    opacity: 0.75;
    color: white;

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
    content: '<';
  }
  [dir='rtl'] .slick-prev:before {
    content: '>';
  }

  .slick-next {
    right: -25px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: '>';
  }
  [dir='rtl'] .slick-next:before {
    content: '<';
  }
`
export const ShapesBG = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`
