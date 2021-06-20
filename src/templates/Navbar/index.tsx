import Logo from 'components/Logo'
import useWindowSize from 'hooks/useWindowSize'
import useYPosition from 'hooks/useYPosition'
import * as S from './styles'

type trabalhoSectionProps = {
  trabalhos: {
    ativar: boolean
  }
}

const MenuBreakpoint = (placeInOrder) => {
  const { height } = useWindowSize()
  const yPos = useYPosition()
  const breakpoint = height * placeInOrder - height

  return yPos >= breakpoint && yPos < breakpoint + height ? 'active' : ''
}

const Navbar = ({ trabalhos }: trabalhoSectionProps) => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.NavTo href="#header" className={MenuBreakpoint(1)}>
          <Logo className={MenuBreakpoint(1)} />
        </S.NavTo>
      </S.LogoWrapper>
      <S.ItemsWrapper>
        <S.UList>
          <S.NavTo href="#sobre" className={MenuBreakpoint(2)}>
            <S.Item>Sobre</S.Item>
          </S.NavTo>
          <S.NavTo href="#marcas" className={MenuBreakpoint(3)}>
            <S.Item>Marcas</S.Item>
          </S.NavTo>
          <S.NavTo href="#times" className={MenuBreakpoint(4)}>
            <S.Item>Times</S.Item>
          </S.NavTo>
          <S.NavTo href="#atletas" className={MenuBreakpoint(5)}>
            <S.Item>Atletas</S.Item>
          </S.NavTo>
          <S.NavTo href="#gamers" className={MenuBreakpoint(6)}>
            <S.Item>Gamers</S.Item>
          </S.NavTo>
          <S.NavTo href="#cases" className={MenuBreakpoint(7)}>
            <S.Item>{trabalhos.ativar ? 'Cases' : undefined}</S.Item>
          </S.NavTo>
        </S.UList>
        <S.NavTo href="#contato">
          <S.Contato>Contato</S.Contato>
        </S.NavTo>
      </S.ItemsWrapper>
    </S.Container>
  )
}

export default Navbar
