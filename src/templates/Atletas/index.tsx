import * as S from './styles'
import Slider from 'react-slick'
import SectionTitle from 'components/SectionTitle'
import Description from 'components/description'
import Button from 'components/Button'
import Image from 'components/Image'

import { AtletaProps } from 'types/api'
import Triangulo from 'components/Triangulo'

type AtletaComponentProps = {
  atleta: AtletaProps
}

const Atletas = ({ atleta }: AtletaComponentProps) => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <S.Container className="section" id="atletas">
      <S.Mesh src="https://gamerbiz.s3.us-east-2.amazonaws.com/mesh_7bf5c9b449.webp" />
      <S.HeadWrapper>
        <SectionTitle>{atleta.titulo}</SectionTitle>
        <Description M>{atleta.descricao}</Description>
      </S.HeadWrapper>
      <S.SliderWrapper>
        <Slider {...settings}>
          {atleta.Jogador.map((jogador) => {
            return (
              <S.PlayerDiv key={jogador.nome}>
                <S.ShapeWrapper>
                  <div>
                    <Triangulo />
                  </div>
                </S.ShapeWrapper>
                <S.PlayerTxtCard>
                  <p className="playerName">{jogador.nome}</p>
                  <p className="playerInfo">
                    {jogador.eSport} - {jogador.time}
                  </p>
                </S.PlayerTxtCard>
                <Image escudo={jogador.foto} />
              </S.PlayerDiv>
            )
          })}
        </Slider>
      </S.SliderWrapper>
      <Button L>FAÇA PARTE DA GAMERBIZ</Button>
    </S.Container>
  )
}

export default Atletas
