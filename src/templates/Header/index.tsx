import BackgroundImage from 'components/BackgoundImage'
import Description from 'components/description'
import HeaderTitle from 'components/HeaderTitle'
import ShapesWrapper from 'components/ShapesWrapper'
import { HeaderProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

type HeaderComponentProps = {
  header: HeaderProps
}

const Header = ({ header }: HeaderComponentProps) => {
  return (
    <S.Container className="section" id="header">
      <S.LogoBG>
        <BackgroundImage />
        <S.ShapesBG>
          <ShapesWrapper />
        </S.ShapesBG>
        <S.PCImg
          src={
            header.imagemDeFundo ? getImageUrl(header.imagemDeFundo.url) : ''
          }
        />
        <S.ContentContainer>
          <S.ShapesFirst>
            <ShapesWrapper />
          </S.ShapesFirst>
          <HeaderTitle>{header.titulo}</HeaderTitle>
          <Description L>{header.descricao}</Description>
        </S.ContentContainer>
      </S.LogoBG>
    </S.Container>
  )
}

export default Header
