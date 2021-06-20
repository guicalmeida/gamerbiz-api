import Circulo from 'components/Circulo'
import Quadrado from 'components/Quadrado'
import Triangulo from 'components/Triangulo'
import Xis from 'components/Xis'
import * as S from './styles'

type Props = {
  className?: string
}

const ShapesWrapper = ({ className }: Props) => {
  return (
    <S.SectionWrapper className={className}>
      <S.CircleContainer>
        <Circulo />
      </S.CircleContainer>
      <S.TriContainer>
        <Triangulo />
      </S.TriContainer>
      <S.SquareContainer>
        <Quadrado />
      </S.SquareContainer>
      <S.XContainer>
        <Xis />
      </S.XContainer>
    </S.SectionWrapper>
  )
}

export default ShapesWrapper
