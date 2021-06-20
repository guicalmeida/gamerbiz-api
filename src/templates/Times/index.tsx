import Quadrado from 'components/Quadrado'
import { TimesProps } from 'types/api'

import Tilt from 'react-parallax-tilt'
import * as S from './styles'
import Image from 'components/Image'
import ItemTitle from 'components/ItemTitle'
import Description from 'components/description'
import Arrow from 'components/Arrow'
import Button from 'components/Button'

type TimesComponentProps = {
  times: TimesProps
}
const Times = ({ times }: TimesComponentProps) => {
  return (
    <S.Container className="section" id="times">
      <S.SquareContainer>
        <Quadrado />
      </S.SquareContainer>
      <S.ShirtContentContainer>
        <S.Coluna className="colEsq">
          {times.caixaDeTexto[0] ? (
            <S.ServicoInfo>
              <ItemTitle>{times.caixaDeTexto[0].titulo}</ItemTitle>
              <Description M>{times.caixaDeTexto[0].descricao}</Description>
              <S.ArrowContainer className="topLeft">
                <Arrow />
              </S.ArrowContainer>
            </S.ServicoInfo>
          ) : (
            ''
          )}
          {times.caixaDeTexto[1] ? (
            <S.ServicoInfo className="curta">
              <ItemTitle>{times.caixaDeTexto[1].titulo}</ItemTitle>
              <Description M>{times.caixaDeTexto[1].descricao}</Description>
              <S.ArrowContainer className="botLeft">
                <Arrow />
              </S.ArrowContainer>
            </S.ServicoInfo>
          ) : (
            ''
          )}
        </S.Coluna>
        <S.ShirtWrapper>
          <Tilt
            trackOnWindow={true}
            gyroscope={true}
            tiltAxis="y"
            tiltReverse={true}
          >
            <Image escudo={times.camiseta} />
          </Tilt>
        </S.ShirtWrapper>
        <S.Coluna className="colDir">
          {times.caixaDeTexto[2] ? (
            <S.ServicoInfo className="direita">
              <ItemTitle>{times.caixaDeTexto[2].titulo}</ItemTitle>
              <Description M>{times.caixaDeTexto[2].descricao}</Description>
              <S.ArrowContainer className="topRight">
                <Arrow />
              </S.ArrowContainer>
            </S.ServicoInfo>
          ) : (
            ''
          )}
          {times.caixaDeTexto[3] ? (
            <S.ServicoInfo className="direita curta">
              <ItemTitle>{times.caixaDeTexto[3].titulo}</ItemTitle>
              <Description M>{times.caixaDeTexto[3].descricao}</Description>
              <S.ArrowContainer className="botRight">
                <Arrow />
              </S.ArrowContainer>
            </S.ServicoInfo>
          ) : (
            ''
          )}
        </S.Coluna>
      </S.ShirtContentContainer>
      <S.ButtonContainer>
        <Button L>{times.botao.texto}</Button>
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Times
